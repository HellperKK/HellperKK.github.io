---
title: Refaire le switch expression de java
---

Il y a quelques années maintenant je suis tombé sur un article proposant d'implémenter en java 8 les switch expression sorti en java 12 à l'aide d'expressions lambda. j'avais bien aimé sa lecture et la mise en avant de certains concepts, néanmoins j'étais déçu par plusieurs points du code final, en particulier:

- Les cases n'étaient pas vraiment exécutées dans l'odre de leur décralation.
- Il n'était pas vraiment possible d'étendre les cases présents

Pour ces deux raisons, j'ai décidé de tenter moi aussi la réécriture du switch à ma manière, et de voir ce que je peux apprendre en chemin.


## Premier jet

En décortiquant la structure switch, je note trois parties:

- La valeur à match
- Un ensemble de cas, chacun lié à une valeur retournée
- Un cas `default`, qui renvois sa valeur si rien ne correspond avant.

Pour cete raison, il me semble important de commencer mon code par lype d'un cas, représenté par un test de correspondace et la valeur à renvoyer si le retst passe.

Pour ce faire, je décide de crée une interface :

```java
interface Rule<V, R> {
    public boolean test(V value);

    public R run();
}
```

Une méthode pour le tester le cas et une pour le retour. Comme je ne sais pas à l'avance les types de la valeur à tester ou de celle retournée, j'ai donc besoin de deux génériques, `Value`, et `Return`.

À partir de ça je peux alors définir la classe implémentant mon switch:

```java
class Switcher<V, R> {
    private ArrayList<Rule<V, R>> rules;
    private V value;
    private R def;

    public Switcher(V value) {
        this.rules = new ArrayList<>();
        this.value = value;
        this.def = null;
    }
}
```

Où j'ai donc ma collection des règles, la valeur à tester et la valeur de retour par défaut (Si non founie, je renvois null par défaut). Je retrouve aussi les génériques utilisés dans mon interface.

Je peux ensuite ajouter trois méthodes pour m'en servir:

```java
public Switcher<V, R> addRule(Rule<V, R> rule) {
    rules.add(rule);

    return this;
}

public Switcher<V, R> defaults(R def) {
    this.def = def;

    return this;
}

public R run() {
    for (Rule<V, R> rule : rules) {
        if (rule.test(value)) {
            return rule.run();
        }
    }

    return this.def;
}
```

Rien d'extraordinaire ici, deux méthodes pour ajouter des règles et définir le default, puis une méthode pour exécuter le tout: je parcours les règles et je renvois le retour de la première valide. Ou je renvois `this.def` si je n'en trouve pas.

Avec ce code, je suis déjà en mesure de produire un exemple de switch:

```java
int age = 18;

String reponse = new Switcher<Integer, String>(age)
    .defaults("impossible !")
    .addRule(new Rule<Integer, String>() {
        public boolean test(Integer value) {
            return value == 42;
        }

        public String run() {
            return "le meilleur age !";
        }
    })
    .addRule(new Rule<Integer, String>() {
        public boolean test(Integer value) {
            return value >= 0 && value < 18;
        }

        public String run() {
            return "en voilà un enfant !";
        }
    })
    .addRule(new Rule<Integer, String>() {
        public boolean test(Integer value) {
            return value < 70;
        }

        public String run() {
            return "bande de jeunes decadents !";
        }
    })
    .run();

System.out.println(reponse);
```

Le code fait usage des classes anonymes pour chaque cas, et ça marche très bien. Un avantage est qu'on peut définir chaque cas sans avoir à recréer une classe dédiée, ce qui serait nécessaire ici puisque chaque implémentation de test est différente d'un cas à l'autre. Néanmoins, c'est assez... verbeux.


## Un peu de spécialisation

Heureusement, il existe des solutions à cela et une première c'est l'héritage.

```java
abstract class EqualityRule<V, R> implements Rule<V, R> {
    private V tester;

    public EqualityRule(V tester) {
        this.tester = tester;
    }

    public boolean test(V value) {
        return value.equals(tester);
    }
}
```
En faisant ainsi, je crée une règle donc le test est spécialisé et je n'ai plus qu'à spécifier le retour, ce qui alège partiellement mon code (ouf !):

```java
// avant
.addRule(new Rule<Integer, String>() {
    public boolean test(Integer value) {
        return value == 42;
    }

    public String run() {
        return "le meilleur age !";
    }
})

// apres
.addRule(new EqualityRule<Integer, String>(42) {
    public String run() {
        return "le meilleur age !";
    }
})
```

En faisant ainsi je pourrait créer autant de règles de la nature souhaitée en spécialisant à volonté. Par exemple, je peux faire une règle qui n'exécute pas de code avant de retourner. Petit hic cependant, java n'autorisant pas l'héritage multiple, il ne m'est pas possible d'hériter de plusieurs règles pour les composer entre elles (outch !).

Autre possibilité, le `factory`: plutôt que de créer une classe pour chaque cas, je vais créer une fonction qui retournera ma clase anonyme. Par exemple, si je reprend le code au dessus:

```java
// definitions
interface Lambda<I, O> {
    public O call(I value);
}

final class RuleFactory {
    public static <V, R> Rule<V, R> equalRule(V v, Lambda<Void, R> run) {
        return new Rule<V, R>() {
            public boolean test(V value) {
                return value.equals(v);
            }

            public R run() {
                return run.call(null);
            }
        };
    }

    private RuleFactory() {
    }
}

// utilisation
.addRule(RuleFactory.equalRule(42, (v) -> "le meilleur age !"))
```

Plutôt court, n'est-ce pas ?


## Uber-généralisation

Pour concluse cet article, je vais aborder un dernier point sur ce switch qui concerne un problème de spécialisation des règles: le fait de définir deux comportements en même temps. Parce que le switch est très souple dans son traitement il est assez compliqué de vraiment prévoir tous les cas possibles et souhaitables. Le dernier exemple de code ajoute d'ailleurs la définition d'une interface pour décrire les expression lambdas à passer en paramètre, qui me permet de définir le comportement de retour de façon plus concise. C'est pourquoi je vais apporter une dernière solutuion en passant deux lambdas en paramètres.

D'abord, je peux étendre ma interface avec une classe concrète:

```java
class GeneralRule<V, R> implements Rule<V, R> {
    private Lambda<V, Boolean> tester;
    private Lambda<Void, R> runner;

    public GeneralRule(Lambda<V, Boolean> tester, Lambda<Void, R> runner) {
        this.tester = tester;
        this.runner = runner;
    }

    public boolean test(V value) {
        return tester.call(value);
    }

    public R run() {
        return runner.call(null);
    }
}

// plus un constructeur dans mon switch
class Switcher<V, R> {
    // ...
    public Switcher<V, R> addGeneralRule(Lambda<V, Boolean> tester, Lambda<Void, R> runner) {
        rules.add(new GeneralRule<V, R>(tester, runner));

        return this;
    }
    // ...
}
```

Faisant ainsi, je peux alors faire des constructeurs sur chaque comportement individuellement pour ensuite le fournir à `RuleFactory.generalRule`, ça me permet alors de gagner une souplesse que je n'avais pas forcément avant.

Cet articles est bien trop grand par rapport à ce que je voulais faire alors je vais conclure avec un dernier exemple de code avant de vouloir tout effacer pour repartir de 0. Le code complet (mal rangé) est disponible [sur le repo du blog](https://github.com/HellperKK/HellperKK.github.io/blob/master/code/switch/Main.java).

À plush !

```java
// des constructeur de lambdas
final class LambdaBuilder {
    public static <V> Lambda<V, Boolean> equalTest(V v) {
        return (V value) -> value.equals(v);
    }

    public static <V extends Comparable<V>> Lambda<V, Boolean> rangeTest(V min, V max) {
        return (V value) -> value.compareTo(min) >= 0 && value.compareTo(max) < 0;
    }

    public static <R> Lambda<Void, R> valueRunner(R result) {
        return (Void v) -> result;
    }

    private LambdaBuilder() {
    }
}

// je reprend le premier exemple
int age = 18;

String reponse = new Switcher<Integer, String>(age)
    .defaults("impossible !")
    .addGeneralRule(
        LambdaBuilder.equalTest(42),
        LambdaBuilder.valueRunner("le meilleur age !"))
    .addGeneralRule(
        LambdaBuilder.rangeTest(0, 18),
        LambdaBuilder.valueRunner("en voilà un enfant !"))
    .addGeneralRule(
        value -> value < 70,
        LambdaBuilder.valueRunner("bande de jeunes decadents !"))
    .run();

System.out.println(reponse);
```
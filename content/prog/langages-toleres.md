+++
title = "Les langages que je tolère"
slug = "Les langages que je tolère"
date = 2019-11-27
draft = true
+++
# Introduction

Le monde de l'informatique grouille ne nombreux langages de programmation, à tel point qu'il est difficile de tous les recensser.
On pourra cependant mentionner le site [rosettacode.org](rosettacode.org) dont le wiki recensse un total de [805 langages](http://rosettacode.org/wiki/Category:Programming_Languages) sans être pourtant une liste complète.

Face à une telle quantité de langages (dont je n'ai évidement pas testé la totalité) il peut-être tenté de la classer.

Par exemple, il est possible de les ordonner en fonction de leur popularité ou de leur nombre d'utilisation. On pourrait aussi chercher à corréler certains critères afin d'en tirer une conclusion globale.
Par exemple, à partir de ces deux informations on peut constater une correlation validable par de nobreux cas. On pourra cependant citer quelques exceptions dont les langages exotiques (Brainfuck, Ook, Malbolge) qui bien que populaires ne sont presque pas utilisés.

Cependant, si de nombreux critères peuvent être appliqués d'un point de vue global, peu d'entre-eux permettent réelement d'en tirer des conclusions individuelles. C'est notamment le cas pour les critères subjectifs qui se basent sur une question de goût.

C'est pourquoi j'ai décidé de rédiger cete article afin d'exprimer ma façon de classe les langages à titre personnel. Cette définition s'appliquant, comme dit dans le titre, aux langages que je tolère, est en donc valide dans toute situation attestant d'un intérêt pour mon point de vue.


# Définition

Ma tolérance aux langages peut se résumer par les conditions suivantes :


## Mon intérêt pour le langage

Un de mes critères majeurs dans l'apréciation d'un langage est le fait même que je prenne du plaisir à l'utiliser. Ce critère peut se juger par la différence entre le nombre d'utilisations agréables et le nombres d'utilisations désagréables.

Ainsi, un langage qui ne tiens pas ses promesses et dont l'utilisation apporte régulièrement des situations de mauvaises surprises tendra à m'être désagréable. À contrario un langage qui les respecte et se comporte tel que je m'y attend tendra à m'être agréable.

Prenont deux cas d'exemple :

Voici une description du langage Javascript, extrait du site de la [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript)

> C'est un langage à objets utilisant le concept de prototype, disposant d'un typage faible et dynamique qui permet de programmer suivant plusieurs paradigmes de programmation : fonctionnelle, impérative et orientée objet.

Voici une autre description por la langage Java, extrait du site d'[Oracle](https://docs.oracle.com/javase/specs/jls/se15/html/jls-1.html)

> The Java® programming language is a general-purpose, concurrent, class-based, object-oriented language. [...] The Java programming language is strongly and statically typed. [...]

On pourra notter plusieurs différences entre les deux langages à partir de leur description respective. L'une d'elles est le fait que Javascript est dynamiquement typé là où Java est statiquement typé.
Il m'est alors possible de titrer des conclusions et des attentes différentes du poiunt de vue des ces deux attribus. Ainsi, en utilisant la définition suivante [tirée de la doc oracle](https://docs.oracle.com/cd/E93962_01/bigData.Doc/studio_users_onPrem/src/csu_transform_typing.html) :

> First, dynamically-typed languages perform type checking at runtime, while statically typed languages perform type checking at compile time. This means that scripts written in dynamically-typed languages (like Groovy) can compile even if they contain errors that will prevent the script from running properly (if at all). If a script written in a statically-typed language (such as Java) contains errors, it will fail to compile until the errors have been fixed.

En utilisant Javascript, je m'attend donc à ce qu'il accepte tout ce que je lui demande de faire sans broncher. Si une erreur surviens en l'utilisant, je ne peux pas lui en vouloir de ne m'avoir pas prévnu puisque je sais qu'il ne préviens jamais.

A contrario, lorsque j'utilise Java, je m'attend à ce qu'il m'aide à éviter les erreurs et je serais moins tolérant s'il lui arrivait de lasser passer une erreur. Aussi, toute contrainte étant à double tranchant, je serais aussi moins tolérant s'il m'interisait de faire des choses valides.

(NDA : Cette comparaison ne traitant que d'un point précis pour les deux langages, elle n'est en aucun cas suffisante pour déterminer une superriorité du point de vue de l'un sur l'autre. Certaines mauvaises langues pourront d'ailleurs suggérer qu'elle ne permet pas non plus de déterminer si un seul des deux est vraiment bon :P)


## Ma tolérance au langage

Nous voilà donc au coeur de l'article. Une première chose que je peux affirmer c'est qu'un langage qui m'intéresse (conformément à la définition ci-dessus) est aussi par définition un langage que je tolère. Le but de cette cestion est donc de définir les langages que j'ai peu d'intérêt à utiliser, mais que j'accepte d'utiliser.

Cette catégorie comprend en fait tous les langages pour lesquels il existe des contexts pour lesquel il n'y a pas d'autres alternatives.

Par exemple, si je viens à ma servir du moteur de jeu Unity, pour lequel seul le langage C# est supporté, alors j'accepterais d'utiliser Unity. Cependant, si le moteur propose finalement une alternative qui m'est plus intéressante, alors je serais tenté de m'en passer. Ce raisonnement est appliquable aussi à Unity dans la mesure où s'il existe une alternative au moteur-même alors l'alternative est aussi envisageable.

En bref, je n'accepte d'utilser C# dans Unity que si je n'ai pas le choix pour l'un et pour l'autre.

Une autre façon de formuler cela est dire que je tolère un langage quand son utilisation est justifiée dans le contexte qui m'intéresse. Et le caractère indispensable de l'outil peut la justifier. Cependant certaines justifications ne sont pas vraiment valides, ce qui se constate en particulier dans le cas d'une justification qui s'auto-allimente. Ainsi tout outil, dès qu'on exclus tout le reste, devient l'unique possibilité du context qui le définit comme unique possibilité.


# Conclusion

Voici donc
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        int age = 18;

        String reponse = new Switcher<Integer, String>(age)
                .defaults("impossible !")
                .addRule(RuleFactory.equalRule(42, (v) -> "le meilleur age !"))
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

        String reponseb = new Switcher<Integer, String>(age)
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

        System.out.println(reponseb);
    }
}

interface Rule<V, R> {
    public boolean test(V value);

    public R run();
}

abstract class EqualityRule<V, R> implements Rule<V, R> {
    private V tester;

    public EqualityRule(V tester) {
        this.tester = tester;
    }

    public boolean test(V value) {
        return value.equals(tester);
    }
}

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

class Switcher<V, R> {
    private ArrayList<Rule<V, R>> rules;
    private V value;
    private R def;

    public Switcher(V value) {
        rules = new ArrayList<>();
        this.value = value;
        this.def = null;
    }

    public Switcher<V, R> addRule(Rule<V, R> rule) {
        rules.add(rule);

        return this;
    }

    public Switcher<V, R> addGeneralRule(Lambda<V, Boolean> tester, Lambda<Void, R> runner) {
        rules.add(new GeneralRule<V, R>(tester, runner));

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
}

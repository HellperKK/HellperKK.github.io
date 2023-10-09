public class Main {
    public static void main(String[] args) {
        List<Integer> list = Cons.from(new Integer[] { 3, 2, 1, 8, 7, 9 });

        /*
         * List<List<Integer>> listb = Cons.from(new Integer[]Cons.from(new Integer[] {
         * 3, 2, 1, 8, 7, 9 }),
         * Cons.from(new Integer[] { 4, 5, 7, 3, 5, 8 }));
         */

        System.out.println(list.map((x -> x + 1)));
        System.out.println(list.flatMap((x -> Cons.from(new Integer[] { x, x * 11 }))));

        System.out.println(list.flatten());
        // System.out.println(listb.flatten((x -> Cons.from(new Integer[] { x, x * 11
        // }))));
    }
}

public interface AVoidLam<A> {
    public void call(A value);
}

interface AtomLam<A, B> {
    public B call(A value);
}

interface AtomLam2<A, B, C> {
    public C call(A val, B valb);
}

interface List<A> {
    public A get(int index);

    public int length();

    public boolean include(A value);

    public boolean hasNext();

    public List<A> prepend(A value);

    public List<A> concat(List<A> values);

    public List<A> reverse();

    public List<A> filter(AtomLam<A, Boolean> lam);

    public <B> List<B> map(AtomLam<A, B> lam);

    public <B> List<B> flatMap(AtomLam<A, List<B>> lam);

    public <B> List<B> flatten();

    public <B> B inject(B value, AtomLam2<B, A, B> lam);

    public void foreach(AVoidLam<A> lam);
}

class Cons<A> implements List<A> {
    public static <A> List<A> single(A value) {
        return new Cons<A>(value, null);
    }

    public static <A> List<A> from(A[] values) {
        List<A> res = new Empty<A>();

        for (A a : values) {
            res = new Cons<A>(a, res);
        }

        return res.reverse();
    }

    private final A value;
    private final List<A> next;

    public Cons(A value, List<A> next) {
        this.value = value;
        this.next = next;
    }

    @Override
    public List<A> prepend(A value) {
        return new Cons<A>(value, this);
    }

    @Override
    public List<A> concat(List<A> values) {
        return new Cons<A>(value, next.concat(values));
    }

    @Override
    public String toString() {
        return value.toString() + "," + next.toString();
    }

    @Override
    public <B> List<B> map(AtomLam<A, B> lam) {
        return new Cons<B>(lam.call(value), next.map(lam));
    }

    @Override
    public <B> List<B> flatMap(AtomLam<A, List<B>> lam) {
        return lam.call(this.value).concat(this.next.flatMap(lam));
    }

    @Override
    public <B> List<B> flatten() {
        String type = value.getClass().getCanonicalName();

        if (type.equals("Cons") || type.equals("Empty")) {
            return this.flatMap(x -> (List<B>) x);
        }

        return this.flatMap(x -> new Cons<B>((B) x, null));
    }

    @Override
    public <B> B inject(B value, AtomLam2<B, A, B> lam) {
        return next.inject(lam.call(value, this.value), lam);
    }

    @Override
    public List<A> reverse() {
        List<A> empty = new Empty<A>();
        return this.inject(empty, (mem, val) -> mem.prepend(val));
    }

    @Override
    public A get(int index) {
        return index == 0 ? value : next.get(index - 1);
    }

    @Override
    public List<A> filter(AtomLam<A, Boolean> lam) {
        return lam.call(value) ? new Cons(value, next.filter(lam)) : next.filter(lam);
    }

    @Override
    public void foreach(AVoidLam lam) {
        lam.call(value);
        next.foreach(lam);
    }

    @Override
    public int length() {
        return 1 + next.length();
    }

    @Override
    public boolean include(A value) {
        return this.value.equals(value) || next.include(value);
    }

    @Override
    public boolean hasNext() {
        return true;
    }
}

class Empty<A> implements List<A> {
    public Empty() {
    }

    @Override
    public List<A> prepend(A value) {
        return new Cons(value, this);
    }

    @Override
    public List<A> concat(List<A> values) {
        return values;
    }

    @Override
    public String toString() {
        return "";
    }

    @Override
    public <B> List<B> map(AtomLam<A, B> lam) {
        return new Empty<B>();
    }

    @Override
    public <B> List<B> flatMap(AtomLam<A, List<B>> lam) {
        return new Empty<B>();
    }

    @Override
    public <B> List<B> flatten() {
        return new Empty<B>();
    }

    @Override
    public <B> B inject(B value, AtomLam2<B, A, B> lam) {
        return value;
    }

    @Override
    public List<A> reverse() {
        return this;
    }

    @Override
    public A get(int index) {
        throw new IndexOutOfBoundsException();
    }

    @Override
    public List<A> filter(AtomLam<A, Boolean> lam) {
        return this;
    }

    @Override
    public void foreach(AVoidLam lam) {

    }

    @Override
    public int length() {
        return 0;
    }

    @Override
    public boolean include(A value) {
        return false;
    }

    @Override
    public boolean hasNext() {
        return false;
    }
}
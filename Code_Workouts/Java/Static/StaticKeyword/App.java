package Code_Workouts.JavaWorkouts.Static.StaticKeyword;

public class App {
    public static void main(String[] args) {
        ClassA a = new ClassA();
        System.out.println(a.onepps());
        ClassB b = new ClassB();
        System.out.println(b.oneppb());
        ClassA c = new ClassB();
        System.out.println(c.onepps());
        ClassA d = new ClassA();
        System.out.println(d.onepps());
        System.out.println(ClassA.staticpp());
        System.out.println(c.onepps());
    }
}

/*
        Output:
        1
        1
        2
        3
        4
        5
 */
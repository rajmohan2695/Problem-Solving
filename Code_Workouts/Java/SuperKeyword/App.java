package Code_Workouts.JavaWorkouts.SuperKeyword;

public class App {
    public static void main(String[] args) {
        ClassA a = new ClassA();
        ClassB b = new ClassB();
        System.out.println(a.classMa);
        System.out.println(a.value());
        System.out.println(b.classMa);
        System.out.println(b.value());
    }
}

/*
        Output:
        5
        5
        10
        15
 */
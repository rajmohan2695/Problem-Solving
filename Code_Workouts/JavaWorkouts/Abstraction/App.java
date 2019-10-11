package Code_Workouts.JavaWorkouts.Abstraction;

public class App {
    public static void main(String[] args) {
        ClassB b = new ClassB();
        ClassC c = new ClassC();
        b.methodC();
        b.methodA();
        b.methodB();
        c.methodC();
        c.methodA();
        ClassA n = new ClassA() {
            @Override
            public void methodB() {
            }
        };
        n.methodB();
    }
}

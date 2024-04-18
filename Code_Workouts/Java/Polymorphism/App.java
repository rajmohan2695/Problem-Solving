package Code_Workouts.JavaWorkouts.Polymorphism;

public class App {
    public static void main(String[] args) {
        ClassB b = new ClassB();
        b.add(1,2);
        b.add(1,2,3);
        b.add(1,2,3,4);
        System.out.println(b.load());
    }
}

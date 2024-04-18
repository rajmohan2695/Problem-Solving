package Code_Workouts.JavaWorkouts.Static.StaticBlock;

public class App {
    ClassA obj = new ClassA(); // Why?

    static {
        System.out.println("Static Block Executed");
    }

    public static void main(String[] args) {
        System.out.println("Main Executed");
        ClassA object = new ClassA();
        ClassA object1 = new ClassA();
    }
}
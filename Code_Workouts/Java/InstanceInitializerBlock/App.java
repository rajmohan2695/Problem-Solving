package Code_Workouts.JavaWorkouts.InstanceInitializerBlock;

public class App {
    public static void main(String[] args) {
        ClassB b = new ClassB();
    }
}

/*
        Output:
        ClassA static block executed
        ClassB static block executed
        ClassA instance block executed
        ClassA constructor executed
        ClassB instance block executed
        ClassB constructor executed
 */
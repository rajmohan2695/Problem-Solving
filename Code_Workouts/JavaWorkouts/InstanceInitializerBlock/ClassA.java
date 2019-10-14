package Code_Workouts.JavaWorkouts.InstanceInitializerBlock;

public class ClassA {
    ClassA(){
        System.out.println("ClassA constructor executed");
    }

    {
        System.out.println("ClassA instance block executed");
    }

    static{
        System.out.println("ClassA static block executed");
    }
}

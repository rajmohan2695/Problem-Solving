package Code_Workouts.JavaWorkouts.InstanceInitializerBlock;

public class ClassB extends ClassA {
    ClassB(){
        System.out.println("ClassB constructor executed");
    }

    {
        System.out.println("ClassB instance block executed");
    }

    static{
        System.out.println("ClassB static block executed");
    }
}

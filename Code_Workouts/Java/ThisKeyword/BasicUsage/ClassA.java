package Code_Workouts.JavaWorkouts.ThisKeyword.BasicUsage;

public class ClassA {
    String name;

    ClassA(String name){
        this.name = name;
        System.out.println("Assigned name value using this");
    }

    public void method1(){
        System.out.println("Method 1 executed");
        this.method2();
    }

    public void method2(){
        System.out.println("Method 2 executed using this");
    }
}

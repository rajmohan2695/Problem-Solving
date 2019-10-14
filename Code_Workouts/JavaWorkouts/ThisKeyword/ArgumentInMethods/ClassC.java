package Code_Workouts.JavaWorkouts.ThisKeyword.ArgumentInMethods;

public class ClassC {
    public void method2(ClassC arg){
        System.out.println("Method executed getting 'this' as argument");
    }

    public void method1(){
        method2(this);
    }
}

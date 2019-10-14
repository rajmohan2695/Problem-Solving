package Code_Workouts.JavaWorkouts.ThisKeyword.ArgumentsInConstructorCall;

public class ClassOne {
    ClassTwo obj;
    ClassOne(ClassTwo obj){
        this.obj = obj;
    }

    public void display(){
        System.out.println(obj.data);
    }
}

package Code_Workouts.JavaWorkouts.ThisKeyword.ArgumentsInConstructorCall;

public class ClassTwo {
    ClassTwo()
    {
        ClassOne obj = new ClassOne(this);
        obj.display();
    }
    int data = 10;
}

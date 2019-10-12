package Code_Workouts.JavaWorkouts.SuperKeyword;

public class ClassB extends ClassA {
    int classMa = 10;

    ClassB() {
        super();
    }

    public int value() {
        return this.classMa + super.classMa;
    }
}

package Code_Workouts.JavaWorkouts.SuperKeyword;

public class ClassB extends ClassA {
    int classMa = 10;

    ClassB() {
//        super();
        this(5);
    }

    ClassB(int x){
        System.out.println("this Constructor executed "+x);
    }
    public int value() {
        return this.classMa + super.classMa;
    }
}

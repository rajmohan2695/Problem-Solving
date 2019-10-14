package Code_Workouts.JavaWorkouts.ThisKeyword.UsingClassContructor;

public class App {
    public static void main(String[] args) {
        ClassB object = new ClassB("Raj Mohan",23);
        object.display();

        System.out.println();

        ClassB object2 = new ClassB("Jayakumar",32);
        object2.display();
    }
}
/*
        Name : Raj Mohan
        Emp no : 2
        Age : 23

        Name : Jayakumar
        Emp no : 3
        Age : 32
 */

package Code_Workouts.JavaWorkouts.Inheritance;

public class App {
    public static void main(String[] args) {
        Parent p = new Parent();
        Child c = new Child();

        p.information();
        System.out.println();
        c.informationc();

        System.out.println("Parent Networth is : "+c.parentsAsserts());
    }
}
/*
        Output:
        Parent Class constructor executed
        5
        Child Class constructor executed
        Name : John
        Age : 50
        Networth : 25000

        Name : Peter
        Age : 25
        Parent Name John
        Networth : 40000
        Parent Networth is : 25000
 */
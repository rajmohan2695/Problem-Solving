package Code_Workouts.JavaWorkouts.Inheritance;

public class Parent {
    int agep = 50;
    String namep = "John";
    int networthp = 25000;
   static void method(){
        System.out.println("Parent Class cll");
    }

    Parent() {
//        this(10);
        super();
        System.out.println("Parent Class constructor executed");
    }

    Parent(int a) {
        System.out.println(a);
    }

    public int asserts() {
        return networthp;
    }

    public void information() {

        System.out.println("Name : " + namep);
        System.out.println("Age : " + agep);
        System.out.println("Networth : " + networthp);
    }

}

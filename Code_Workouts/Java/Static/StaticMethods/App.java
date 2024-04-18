package Code_Workouts.JavaWorkouts.Static.StaticMethods;

public class App {
    public static void main(String[] args) {
        System.out.println(Adder.add(5,10));
        System.out.println(Adder.add(5,10,15));

        System.out.println(Adder2.add(5,5.12));

        Adder obj = new Adder();

        System.out.println(obj.add(10,30));
        System.out.println(obj.multiply(5,10));
    }
}

/*
        Output:
        15
        30
        10.120000000000001
        40
        50
 */
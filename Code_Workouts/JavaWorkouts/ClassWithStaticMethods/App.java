package Code_Workouts.JavaWorkouts.ClassWithStaticMethods;

public class App {
    public static void main(String[] args) {
        System.out.println(Adder.add(5,10));
        System.out.println(Adder.add(5,10,15));

        System.out.println(Adder2.add(5.12,5.12));

        Adder obj = new Adder();

        System.out.println(obj.add(10,30));
        System.out.println(obj.multiply(5,10));
    }
}
package Code_Workouts.JavaWorkouts;

public class Recursion {
    public static void main(String[] args) {
        int i = 4;
        System.out.println(factorial(i));
    }

    public static int factorial(int i) {
        if (i == 0) {
            return 1;
        } else {
            return i * factorial(i - 1);
        }
    }
}

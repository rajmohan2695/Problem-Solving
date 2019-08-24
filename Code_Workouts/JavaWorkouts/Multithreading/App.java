package Code_Workouts.JavaWorkouts.Multithreading;

public class App {
    public static void main(String[] args) {
        PrintHello hello = new PrintHello();
        PrintHi hi = new PrintHi();
        hello.start();
        hi.start();
    }
}

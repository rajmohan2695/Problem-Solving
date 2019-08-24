package Code_Workouts.JavaWorkouts.InterfaceSample;

public class Run {
    public static void main(String[] args) {
        Vehicle c = new Car();
        Bike b = new Bike();
        process(c);
        process(b);

    }
    public static void process(Vehicle c){
        c.mileage();
    }

}
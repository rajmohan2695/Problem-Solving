package Code_Workouts.JavaWorkouts.InterfaceSample;

import org.w3c.dom.ls.LSOutput;

public class Run {
    public static void main(String[] args) {
        Vehicle c = new Car();
        Bike b = new Bike();
        process(c);
        process(b);
        c.sound();

    }

    public static void process(Vehicle c) {
        c.mileage();
    }

}
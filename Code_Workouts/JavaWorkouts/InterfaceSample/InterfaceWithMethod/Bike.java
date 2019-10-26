package Code_Workouts.JavaWorkouts.InterfaceSample;

public class Bike implements Vehicle{
    @Override
    public void mileage() {
        System.out.println("Mileage : 10");
    }

    @Override
    public void speed() {
        System.out.println("Speed : 200");
    }

    public void print(){
        System.out.println("Printed from Bike");
    }
}

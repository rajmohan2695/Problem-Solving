package Code_Workouts.JavaWorkouts.InterfaceSample.InterfaceWithMethod;

public class Car implements Vehicle {
    @Override
    public void mileage() {
        System.out.println("Mileage : 50");
    }

    @Override
    public void speed() {
        System.out.println("Speed : 60");
    }

    public void print(){
        System.out.println("Printed from Car");
    }
}
package Code_Workouts.JavaWorkouts.InterfaceSample.InterfaceWithMethod;

public interface Vehicle {
    public void mileage();
    public void speed();
    default public void sound(){
        System.out.println("Horn");
    }
}
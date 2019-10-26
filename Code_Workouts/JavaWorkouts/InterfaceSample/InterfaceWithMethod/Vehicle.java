package Code_Workouts.JavaWorkouts.InterfaceSample;

public interface Vehicle {
    public void mileage();
    public void speed();
    default public void sound(){
        System.out.println("Horn");
    }
}
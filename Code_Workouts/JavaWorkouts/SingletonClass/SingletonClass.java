package Code_Workouts.JavaWorkouts.SingletonClass;

public class SingletonClass {
    static SingletonClass obj = null;

    private SingletonClass() {
        //Made Constructor Private
    }

    public static SingletonClass objectCreation() {
        if (obj == null)
            return new SingletonClass();
        return obj;
    }

    public void display() {
        System.out.println("Object for Singleton Class is created and tested");
    }
}

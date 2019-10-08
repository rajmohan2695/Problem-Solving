package Code_Workouts.JavaWorkouts.Polymorphism;

public class ClassB extends ClassA{
    public void add(int a,int b,int c,int d){
        System.out.println("Control from ClassB : "+(a+b+c+d));
    }

    public String load(){
        return "Overrided Method";
    }
}

package Code_Workouts.JavaWorkouts.Polymorphism;

public class ClassA {
    public void add(int a,int b){
        System.out.println("Control from ClassA : "+(a+b));
    }

    public void add(int a,int b,int c){
        System.out.println("Control from ClassA : "+(a+b+c));
    }

    public String load(){
        return "Not a Overrided Method";
    }
}

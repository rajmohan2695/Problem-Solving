package Code_Workouts.JavaWorkouts.CallByValue;

public class Operation {
    int data = 10;
    public void increment(int data){
        data = data + 20;
    }

    public static void main(String[] args) {
        Operation op = new Operation();
        System.out.println("Before increment : "+op.data);
        op.increment(100);
        System.out.println("After increment : "+op.data);
    }
}
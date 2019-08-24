package Code_Workouts.JavaWorkouts.Multithreading;

public class PrintHello extends Thread{
    @Override
    public void run() {
        print();
    }
    public void print(){
        int i=0;
        while(i<10){
            System.out.println("Hello");
            i++;
        }
    }
}

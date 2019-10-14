package Code_Workouts.JavaWorkouts.ExceptionHandling;

public class BasicTryCatch {
    public static void main(String[] args) {
        int k=0,j=0,i=1;

        try{
            k=i/j;
        }
        catch(Exception e){
            System.out.println(e);
            System.out.println("Divide By Zero is not possible");
        }

        System.out.println(k);
    }
}

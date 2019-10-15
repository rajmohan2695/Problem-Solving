package Code_Workouts.JavaWorkouts.ExceptionHandling.Exceptionss;

public class NullExceptionExample {
    public static void main(String[] args) throws NullPointerException,ArrayIndexOutOfBoundsException{
        int[] a = new int[5];
        String s = null;
        String k;
        int b;
        try{
            //b = a[5];
            ((Float)null).toString();
            a[3]++;
        }

        catch(Exception e){
            System.out.println(e);
        }
    }
}
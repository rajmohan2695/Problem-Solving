package Code_Workouts.JavaWorkouts;

enum Color{
    RED, ORANGE, green, Yellow;
        }
public class Enums {
    public static void main(String[] args) {
        System.out.println(Color.RED);
        System.out.println(Color.green.ordinal());

        Color arr[] = Color.values();
        for(Color color : arr){
            System.out.println(color+" at the index of "+color.ordinal());
        }

    }
}

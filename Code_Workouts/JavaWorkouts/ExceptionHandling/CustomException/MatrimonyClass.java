package Code_Workouts.JavaWorkouts.ExceptionHandling.CustomException;

public class MatrimonyClass {
    public static void validate(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Too Young for marriage");
        } else if (age > 60) {
            throw new InvalidAgeException("Age Barred");
        } else {
            System.out.println("Profile Accepted");
        }
    }

    public static void main(String[] args) {
        try {
            validate(12);
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
/*
        Output:
        Code_Workouts.JavaWorkouts.ExceptionHandling.CustomException.InvalidAgeException: Too Young for marriage
 */
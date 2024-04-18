package Code_Workouts.JavaWorkouts.ExceptionHandling.CustomException;

public class InvalidAgeException extends RuntimeException {
    InvalidAgeException(String str) {
        super(str);
    }
}

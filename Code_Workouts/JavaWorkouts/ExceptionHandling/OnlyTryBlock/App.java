package Code_Workouts.JavaWorkouts.ExceptionHandling.OnlyTryBlock;

import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        try(Scanner sc = new Scanner(System.in)){
            System.out.println("Enter Something");
            String str = sc.nextLine();
            System.out.println("Entered details : "+str);
        }
    }
}
/*
        Output:
        Enter Something
        Hi 123
        Entered details : Hi 123

        //Instead of using finally for closing the resource , Use try block to handle it
 */
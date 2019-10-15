package Code_Workouts.JavaWorkouts.Collections.ArrayListt;

import java.util.ArrayList;

public class App {
    public static void main(String[] args) {
        ArrayList<String> al = new ArrayList<String>();
        al.add("A");
        al.add("B");
        al.add("D");
        al.add(2,"C");

        System.out.println(al.contains("D"));

        for (String i:al) {
            System.out.println(i);
        }

        //al.sort();

        al.clear();

        System.out.println(al.contains("D"));
    }
}
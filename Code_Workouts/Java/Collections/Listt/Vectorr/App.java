package Code_Workouts.JavaWorkouts.Collections.Listt.Vectorr;

import java.util.Iterator;
import java.util.ListIterator;
import java.util.Vector;

public class App {
    public static void main(String[] args) {
        Vector v = new Vector();
        v.add(1);
        v.add(2);
        v.add(3);
        v.add(4);
        v.add(5);

        Iterator itr = v.iterator();

        while(itr.hasNext()){
            System.out.println(itr.next());
        }
    }
}

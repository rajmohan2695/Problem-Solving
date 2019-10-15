package Code_Workouts.JavaWorkouts.Collections.Listt.LinkedListt;

import java.util.Iterator;
import java.util.LinkedList;

public class App {
    public static void main(String[] args) {
        LinkedList ll = new LinkedList();

        ll.add(5);
        ll.add(10);
        ll.add(20);
        ll.add(25);
        ll.add(30);
        ll.add(2,15);

        Iterator itr = ll.iterator();

        while(itr.hasNext()){
            System.out.println(itr.next());
        }
    }
}

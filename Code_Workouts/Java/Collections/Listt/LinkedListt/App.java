package Code_Workouts.JavaWorkouts.Collections.Listt.LinkedListt;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.ListIterator;

public class App {
    public static void main(String[] args) {
        LinkedList ll = new LinkedList();

        ll.add(5);
        ll.add(10);
        ll.add(20);
        ll.add(25);
        ll.add(30);
        ll.add(2,15);

        ListIterator lv = ll.listIterator();
//        lv.next();
//        lv.set(200);

        Iterator itr = ll.iterator();

        while(lv.hasNext()) {
            lv.next();
            System.out.println(lv.nextIndex());
        }


        while(lv.hasPrevious()){
            System.out.println(lv.previous());
        }
    }
}

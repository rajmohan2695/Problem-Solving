package Code_Workouts.JavaWorkouts.Serialization;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

public class PhoneBook implements Serializable {
    Map<String,String> phoneBook = new HashMap<String, String>();

    public void add(String name,String phonenumber){
        phoneBook.put(name,phonenumber);
    }

    public void show(String name){
        System.out.println(phoneBook.get(name));
    }
}

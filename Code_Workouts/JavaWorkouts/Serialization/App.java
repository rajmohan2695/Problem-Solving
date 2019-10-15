package Code_Workouts.JavaWorkouts.Serialization;

import java.io.*;

public class App {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
//        PhoneBook phonebook = new PhoneBook();

        File fi = new File("obj.txt");
        FileInputStream fis = new FileInputStream(fi);
        ObjectInputStream ois = new ObjectInputStream(fis);
        PhoneBook phonebook = (PhoneBook)ois.readObject();

//        phonebook.add("Raj","9787818277");
//        phonebook.add("Mohan","97879787818277");
//        phonebook.show("Mohan");
//        phonebook.add("Raju","9777777");

//        phonebook.add("Kavin","987989");

//        phonebook.add("Fun","555656");
//        phonebook.show("Fun");

        phonebook.show("Mohan");

        File f = new File("obj.txt");
        FileOutputStream fos = new FileOutputStream(f);
        ObjectOutputStream oos = new ObjectOutputStream(fos);
        oos.writeObject(phonebook);





//        phonebook.show("Raju");
    }
}

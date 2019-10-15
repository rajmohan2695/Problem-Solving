package Code_Workouts.JavaWorkouts.Serialization;

import java.io.*;

public class App {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
//        PhoneBook phonebook = new PhoneBook();
//        phonebook.add("Raj","9787818277");
//        phonebook.add("Mohan","97879787818277");
////        phonebook.show("Mohan");
//        phonebook.add("Raju","9777777");
//        File f = new File("obj.txt");
//        FileOutputStream fos = new FileOutputStream(f);
//        ObjectOutputStream oos = new ObjectOutputStream(fos);
//        oos.writeObject(phonebook);

        File fi = new File("obj.txt");
        FileInputStream fis = new FileInputStream(fi);
        ObjectInputStream ois = new ObjectInputStream(fis);
        PhoneBook phonebook1 = (PhoneBook)ois.readObject();

        phonebook1.show("Raju");
    }
}

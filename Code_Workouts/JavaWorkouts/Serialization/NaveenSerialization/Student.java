package Code_Workouts.JavaWorkouts.Serialization.NaveenSerialization;

import java.io.*;
import java.util.HashMap;

public class Student implements Serializable {
	HashMap<Integer, String> map = new HashMap<>();
	static int count=6;
	String fileName = "obj.txt";

	public Student() {
		map.put(1, "one");
		map.put(2, "two");
		map.put(3, "three");
		map.put(4, "four");
		map.put(5, "five");
	}

	public void serializable() {
		try {
			FileOutputStream file = null;
			ObjectOutputStream out = null;
			File f = new File(fileName);
			if (f.exists()){
				int temp=0;
				while(temp<5) {
					map.put(count++,temp++ +" ");
				}
			}
            file = new FileOutputStream(fileName);
			out = new ObjectOutputStream(file);
			out.writeObject(map);
			out.close();
			file.close();
			System.out.println("object has been serialised");

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public void deSerialise() {
		try {
            FileInputStream input = new FileInputStream(fileName);
            ObjectInputStream inu = new ObjectInputStream(input);
			HashMap<Integer, String> hash = (HashMap) inu.readObject();

			System.out.println("object has been deserialised");
			this.map = hash;
			inu.close();
			input.close();
		} catch (IOException | ClassNotFoundException e) {
			e.printStackTrace();
		}

	}
}
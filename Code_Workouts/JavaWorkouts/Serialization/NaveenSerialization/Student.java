package Code_Workouts.JavaWorkouts.Serialization.NaveenSerialization;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.util.HashMap;

public class Student implements Serializable {
	HashMap<Integer, String> map = new HashMap<>();
	static int count=6;
	String fileName = "obj.txt";

	public Student() {
		map.put(189, "one");
		map.put(9, "two");
		map.put(800, "three");
		map.put(7, "four");
		map.put(6, "five");
	}

	public void serializable() {
		try {
			FileOutputStream file = null;
			ObjectOutputStream out = null;
			File f = new File(fileName);
			file = new FileOutputStream(fileName);
			out = new ObjectOutputStream(file);
			out.writeObject(map);
//			if (f.exists()){
//				int temp=0;
//				while(temp<10) {
//					map.put(count++,temp++ +" ");
			map.put(11, "one");
			map.put(65, "two");
			map.put(6676, "three");
			map.put(4563, "four");
			map.put(975, "five");
//				}
			out.close();
			file.close();
			System.out.println("object has been serialised");
		}
//			file = new FileOutputStream(fileName);
//			out = new ObjectOutputStream(file);
//			out.writeObject(map);


//	}
	catch (Exception e) {
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
			System.out.println(hash);
			inu.close();
			input.close();
		} catch (IOException | ClassNotFoundException e) {
			e.printStackTrace();
		}

	}
}
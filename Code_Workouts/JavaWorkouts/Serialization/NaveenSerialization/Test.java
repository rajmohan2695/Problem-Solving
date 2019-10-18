//package Code_Workouts.JavaWorkouts.Serialization.NaveenSerialization;
//
//import java.io.*;
//import java.util.HashMap;
//
//class Test
//{
//    public static void main(String[] args)
//    {
//        String filename = "file.txt";
//
//        // Serialization
//        HashMap map;
//
//        try
//        {
//            // Reading the object from a file
//            FileInputStream file = new FileInputStream(filename);
//            ObjectInputStream in = new ObjectInputStream(file);
//
//            // Method for deserialization of object
//            map = (HashMap) in.readObject();
//            System.out.println(map);
//            map.put(4, "43434");
//            System.out.println(map);
//            in.close();
//            file.close();
//
//        }
//
//        catch (Exception e){
//            try
//            {
//                //Saving of object in a file
//                FileOutputStream file = new FileOutputStream(filename);
//                ObjectOutputStream out = new ObjectOutputStream(file);
//
//                map.put(1, "naveen");
//                map.put(2, "intellect");
//                map.put(3, "intellect1");
//                // Method for serialization of object
//                out.writeObject(map);
//
//                out.close();
//                file.close();
//
//                System.out.println("Object has been serialized");
//
//            }
//
//            catch(IOException ex)
//            {
//                System.out.println("IOException is caught");
//            }
//        }
//
//        map.put(1, "naveen");
//        map.put(2, "intellect");
//        map.put(3, "intellect1");
//
//        try
//        {
//            //Saving of object in a file
//            FileOutputStream file = new FileOutputStream(filename);
//            ObjectOutputStream out = new ObjectOutputStream(file);
//
////             map.put(1, "naveen");
////             map.put(2, "intellect");
////             map.put(3, "intellect1");
//            // Method for serialization of object
//            out.writeObject(map);
//
//            out.close();
//            file.close();
//
//            System.out.println("Object has been serialized");
//
//        }
//
//        catch(IOException ex)
//        {
//            System.out.println("IOException is caught");
//        }
//
//
//
//        // Deserialization
//        try
//        {
//            // Reading the object from a file
//            FileInputStream file = new FileInputStream(filename);
//            ObjectInputStream in = new ObjectInputStream(file);
//
//            // Method for deserialization of object
//            map = (HashMap) in.readObject();
//            System.out.println(map);
//            map.put(4, "43434");
//            System.out.println(map);
//            in.close();
//            file.close();
//
//        }
//        catch(IOException ex)
//        {
//            System.out.println("IOException is caught");
//        }
//
//        catch(ClassNotFoundException ex)
//        {
//            System.out.println("ClassNotFoundException is caught");
//        }
//    }
//}
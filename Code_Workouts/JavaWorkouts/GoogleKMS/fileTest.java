package Code_Workouts.JavaWorkouts.GoogleKMS;

import java.io.*;
import java.util.Properties;

public class fileTest {
    public static void main(String[] args) throws IOException {
        String workingDirectory = System.getProperty("user.dir");
        File file = new File(workingDirectory+"/src/resources/decrypted/credentials.properties");

        InputStream input = new FileInputStream(file);

//        C:\Users\raj mohan\IdeaProjects\Programming\src\resources\decrypted
//        C:\Users\raj mohan\IdeaProjects\Programming\src\main\resources\decrypted

        Properties prop = new Properties();

        prop.load(input);

        prop.keySet().forEach(x -> x = prop.get(x));
        System.out.println(prop);
    }

}

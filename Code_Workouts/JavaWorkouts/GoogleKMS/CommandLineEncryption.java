package Code_Workouts.JavaWorkouts.GoogleKMS;
import java.util.Scanner;

//Created decryption process for GoogleKMS using commandLine through Java
public class CommandLineEncryption {

        public static void main(String[] args) throws Exception {
            Scanner scan = new Scanner(System.in);

            String encryptedFile,decryptedFile,keyring,key,location,project;
            System.out.println("Google KMS : File Encryption \nEnter the project name:");
            project = scan.nextLine();
            System.out.println("Enter the location");
            location = scan.nextLine();
            System.out.println("Enter the Keyring");
            keyring = scan.nextLine();
            System.out.println("Enter the key");
            key = scan.nextLine();
            System.out.println("Enter the path of the file to decrypt");
            encryptedFile = scan.nextLine();
            System.out.println("Suggest a name for the decrypted file");
            decryptedFile = scan.nextLine();

            String cmd = "cd \"C:\\Users\\raj mohan\\AppData\\Local\\Google\\Cloud SDK\" && gcloud kms decrypt --project "+project+" --location "+location+" --keyring "+keyring+" --key "+key+" --ciphertext-file "+encryptedFile+" --plaintext-file C:\\Users\\raj\" \"mohan\\Desktop\\"+decryptedFile+".txt";

            ProcessBuilder builder = new ProcessBuilder(
                    "cmd.exe", "/c", cmd);
            builder.start();
            System.out.println("The file is encrypted and saved in desktop");
    }
}

// Output:
/*
        Google KMS : File Encryption
        Enter the project name:
        secretsmanagement-staging
        Enter the location
        global
        Enter the Keyring
        anywhereworks
        Enter the key
        anywhereworks-default
        Enter the path of the file to decrypt
        D:/staging.properties.encrypted
        Suggest a name for the decrypted file
        faadf
        The file is encrypted and saved in desktop
*/

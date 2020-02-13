package Code_Workouts.JavaWorkouts.GoogleKMS;

import java.io.IOException;

public class DecryptingTheFile {
    public static byte[] decrypt(
            String projectId, String locationId, String keyRingId, String cryptoKeyId, byte[] ciphertext)
            throws IOException {

        // Create the KeyManagementServiceClient using try-with-resources to manage client cleanup.
        try (KeyManagementServiceClient client = KeyManagementServiceClient.create()) {

            // The resource name of the cryptoKey
            String resourceName = CryptoKeyName.format(projectId, locationId, keyRingId, cryptoKeyId);

            // Decrypt the ciphertext with Cloud KMS.
            DecryptResponse response = client.decrypt(resourceName, ByteString.copyFrom(ciphertext));

            // Extract the plaintext from the response.
            return response.getPlaintext().toByteArray();
        }
    }
}

package Problem_Solving;

public class FindingLargestPrimeNumber {
    public static void main(String[] args) {
        int n = 1, temp1 = 0;
        String str = "156711";
        int max = 0;
        int tempMax, temp;
//		int a=n;
        for (int i = str.length() - 1; i >= 0; i--) {
            for (int j = 0; j + i < str.length(); j++) {
                String tempStr = str.substring(j, j + i + 1);
                tempMax = Integer.parseInt(tempStr);
                if ((prime(tempMax)) && (max < tempMax)) {
                    max = tempMax;
                }
            }
            if (max != 0) {
                System.out.println(max);
                break;
            }
        }

    }

    public static boolean prime(int n) {
        // Corner case
        if (n <= 1)
            return false;

        // Check from 2 to n-1
        for (int i = 2; i < n; i++)
            if (n % i == 0)
                return false;

        return true;
    }
}


package Problem_Solving;

public class FindingLargestPrimeNumber {
    public static void main(String[] args) {

        String str = "156711";
        int max = 0;
        int tempMax;

        breakall:
        for (int i = str.length() - 1; i >= 0; i--) {
            for (int j = 0; j + i < str.length(); j++) {
                String tempStr = str.substring(j, j + i + 1);
                tempMax = Integer.parseInt(tempStr);
                if ((prime(tempMax)) && (max < tempMax)) {
                    max = tempMax;
                }
            }
            if (max != 0) {
                System.out.println("The largest prime number is : "+max);
                break breakall;
            }
        }
        if(max==0){
            System.out.println("No prime number found in the given number");
        }

    }

    public static boolean prime(int n) {

        if (n <= 1)
            return false;

        for (int i = 2; i < n; i++)
            if (n % i == 0)
                return false;

        return true;
    }
}
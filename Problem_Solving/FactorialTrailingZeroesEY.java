/*
Leetcode 172. Factorial Trailing Zeroes (Easy)
Given an integer n, return the number of trailing zeroes in n!.

Example 1:

Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.
Example 2:

Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.
Note: Your solution should be in logarithmic time complexity.
*/

package Problem_Solving;

public class FactorialTrailingZeroesEY {
    public static void main(String[] args) {
        int number = 100;
        System.out.println(trailingZeroes(number));
    }
    public static int trailingZeroes(int n) {
        int zeroes = 0;
        while(n>=5){
            zeroes += n/5;
            n=n/5;
        }
        return zeroes;
    }

/*
    public static int trailingZeroes(int n) {
        String factorial = Integer.toString(factorial(n));
        int zeroes = 0;
        for (int i = factorial.length() - 1; i >= 0; i--) {
            if (factorial.charAt(i) == '0') {
                zeroes++;
            } else
                return zeroes;
        }
        return zeroes;
    }

    public static int factorial(int f) {
        if (f == 1)
            return 1;
        else
            return f * factorial(f - 1);
    }

 */
}

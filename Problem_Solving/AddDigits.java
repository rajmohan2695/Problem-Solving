/*
LeetCode 258. Add Digits

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:
Input: 38
Output: 2

Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
             Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?
*/

package Problem_Solving;

public class AddDigits {
    public static void main(String[] args) {
        int num = 388;
        System.out.println(addDigits(num));
    }

    public static int addDigits(int num) {
        while (num / 10 != 0) {
            int temp = 0;
            while (num > 0) {
                temp = temp + num % 10;
                num = num / 10;
            }
            num = temp;
        }
        return num;
    }
}

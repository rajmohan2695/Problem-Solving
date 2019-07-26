/*
7. Reverse Integer
   Given a 32-bit signed integer, reverse digits of an integer.

   Example 1:
        Input: 123
        Output: 321

   Example 2:
        Input: -123
        Output: -321

   Example 3:
        Input: 120
        Output: 21

   Note:
        Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range:
        [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer
        overflows.
*/

package Problem_Solving;
public class ReverseInteger {
    public static void main(String[] args) {
        int number = 123;
        int result=0;
        while(number!=0){
            result=result*10+number%10;
            number=number/10;
        }
        System.out.println(result);
    }
}
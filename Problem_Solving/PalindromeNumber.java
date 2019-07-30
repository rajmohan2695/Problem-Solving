
/*
Leetcode 9. Palindrome Number
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:
Input: 121
Output: true

Example 2:
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
**/

package Problem_Solving;

public class PalindromeNumber {
    public static void main(String[] args) {
        int number=1231321;
        boolean flag=true;
        String s=Integer.toString(number);
        for(int i=0,j=s.length()-1;i<=(s.length()-1)/2;i++,j--){
            if(s.charAt(i)==s.charAt(j)){
                continue;
            }
            else{
                flag=false;
                break;
            }
        }
        System.out.println(flag);
    }
}
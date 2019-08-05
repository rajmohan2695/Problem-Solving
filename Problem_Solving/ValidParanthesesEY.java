/*
Leetcode 20. Valid Parentheses (Easy)
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:
Input: "()"
Output: true

Example 2:
Input: "()[]{}"
Output: true

Example 3:
Input: "(]"
Output: false

Example 4:
Input: "([)]"
Output: false

Example 5:
Input: "{[]}"
Output: true
*/

package Problem_Solving;

import java.util.Stack;

public class ValidParanthesesEY {
    public static void main(String[] args) {
        String s="{()[]{()}}";
        System.out.println(isValid(s));
    }
    public static boolean isValid(String s) {
        Stack<Character> str = new Stack();
        for(int i=0;i<s.length();i++){
            if(s.charAt(i)=='{'||s.charAt(i)=='('||s.charAt(i)=='['){
                str.push(s.charAt(i));
            }
            else if(!str.isEmpty()&&isPair(str.peek(),s.charAt(i))){
                str.pop();
            }
            else{
                return false;
            }
        }
        return str.isEmpty();
    }
    public static boolean isPair(char c1,char c2){
        if((c1=='['&&c2 ==']') || (c1=='{'&&c2 =='}') || (c1=='('&&c2 ==')'))
            return true;
        else
            return false;
    }
}

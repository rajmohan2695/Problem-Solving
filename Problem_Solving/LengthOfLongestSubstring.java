/*
Leetcode 3. Longest Substring Without Repeating Characters
Given a string, find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.*/

package Problem_Solving;

import java.util.HashMap;

public class LengthOfLongestSubstring {
    public static void main(String[] args) {
        String str = "programming";
        System.out.println(lengthOfLongestSubstring(str));
    }

    public static int lengthOfLongestSubstring(String str) {
        HashMap<Character, Integer> s = new HashMap();
        if (str.length() == 0) {
            return 0;
        }
        int max = 1;
        int cmax = 0; //current Maximum
        for (int i = 0; i < str.length(); i++) {
            if (!s.containsKey(str.charAt(i))) {
                s.put(str.charAt(i), i);
                cmax++;
                if (cmax > max) {
                    max = cmax;
                }
            } else {
                i = i - cmax;
                cmax = 0;
                s.clear();
            }
        }
        return max;
    }
}
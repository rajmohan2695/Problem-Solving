/*
Leetcode 14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog","racecar","car"]
Output: ""

Explanation: There is no common prefix among the input strings.

Note: All given inputs are in lowercase letters a-z.
*/

package Problem_Solving;

public class LongestCommonPrefix {
    public static void main(String[] args) {
        String strings[] = {"flower", "flow", "flight"};
        System.out.println(longestCommonPrefix(strings));
    }

    public static String longestCommonPrefix(String[] strs) {
        if (strs.length == 0 || strs == null) {
            return "";
        }
        if (strs.length == 1) {
            return strs[0];
        }
        String lcp = "";
        int least = strs[0].length();
        for (String s : strs) {
            if (s.length() < least) {
                least = s.length();
            }
        }
        for (int i = 0; i < least; i++) {
            for (int j = 0; j < strs.length - 1; j++) {
                if (strs[j].charAt(i) == strs[j + 1].charAt(i)) {
                    if (j == strs.length - 2) {
                        lcp = lcp + strs[0].charAt(i);
                    }
                } else {
                    return lcp;
                }
            }
        }
        return lcp;
    }
}

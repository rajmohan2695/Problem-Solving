/*
Leetcode : 290 - Word Pattern (Easy)

Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.
*/

package Problem_Solving;
import java.lang.*;
import java.util.*;

public class WordPatternEY {
    public static void main(String args[]) {
         System.out.println(wordPattern("abba","dog dog cat dog"));
    }
    
    public static boolean wordPattern(String pattern, String str) {
        
        HashMap<Character,String> stringMap = new HashMap<>();
        
        String[] words = str.split(" ");
        
        System.out.println(words.length +" "+pattern.length());
        
        if(words.length != pattern.length()){ return false; }
        
        for(int i = 0; i< words.length; i++){
            System.out.println(stringMap);
            if(stringMap.containsKey(pattern.charAt(i))){
                if(!stringMap.get(pattern.charAt(i)).equals(words[i])){
                    return false;
                }
            }
            else{
                if(stringMap.containsValue(words[i])) { return false; }
                stringMap.put(pattern.charAt(i),words[i]);
            }
        }
        
        return true;
    }
}
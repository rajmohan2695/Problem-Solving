// Alternating Characters - Hackerrank Challenge - https://www.hackerrank.com/challenges/alternating-characters/problem

package Problem_Solving;

import java.util.Scanner;

public class AlternatingCharacters {
    public static int deletions(String s) {
        int deletions = 0;
        for (int i = 1; i < s.length(); i++) {
            if (s.charAt(i) == s.charAt(i - 1)) {
                deletions++;
            }
        }
        return deletions;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        String[] s = new String[a];
        for (int i = 0; i < a; i++) {
            s[i] = scan.next();
        }
        for (int i = 0; i < a; i++) {
            System.out.println(deletions(s[i]));
        }
    }
}

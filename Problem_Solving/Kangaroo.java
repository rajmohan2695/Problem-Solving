/*
Kangaroo Problem : https://www.hackerrank.com/challenges/kangaroo/problem
 */
package Problem_Solving;

import java.util.Scanner;

public class Kangaroo {
    public static String kangaroo(int[] input) {
        int k1 = input[0];
        int k2 = input[2];
        if (input[2] > input[0] && input[3] > input[1])
            return "NO";
        while (true) {
            k1 = k1 + input[1];
            k2 = k2 + input[3];
            if (k1 < k2) {
                System.out.println(k1 + " " + k2);
                continue;
            } else if (k1 == k2)
                return "YES";
            else
                return "NO";
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int[] input = new int[4];
        for (int i = 0; i < 4; i++) {
            input[i] = scan.nextInt();
        }
        System.out.println(kangaroo(input));
    }
}

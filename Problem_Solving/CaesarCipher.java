/*
Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
For example, the given cleartext  and the alphabet is rotated by . The encrypted string is .

Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

Function Description

Complete the caesarCipher function in the editor below. It should return the encrypted string.

caesarCipher has the following parameter(s):

s: a string in cleartext
k: an integer, the alphabet rotation factor
Input Format

The first line contains the integer, , the length of the unencrypted string.
The second line contains the unencrypted string, .
The third line contains , the number of letters to rotate the alphabet by.

Constraints

1<=n<=100
0<=k<=100

s is a valid ASCII string without any spaces.

Output Format

For each test case, print the encoded string.

Sample Input
11
middle-Outz
2

Sample Output
okffng-Qwvb

Explanation
Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +2:    cdefghijklmnopqrstuvwxyzab

m -> o
i -> k
d -> f
d -> f
l -> n
e -> g
-    -
O -> Q
u -> w
t -> v
z -> b
 */

package Problem_Solving;

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

class CaesarCipher {
    static String caesarCipher(String s, int k) {
        String r = "";
        k = k % 26;
        for (int i = 0; i < s.length(); i++) {
            int l = s.charAt(i);
            if (l >= 65 && l <= 90) {
                int j = (l + k);
                if (j > 90)
                    r = r + (char) (64 + j - 90);
                else
                    r = r + (char) j;
            } else if (l >= 97 && l <= 122) {
                int j = (l + k);
                if (j > 122)
                    r = r + (char) (96 + j - 122);
                else
                    r = r + (char) j;
            } else
                r = r + s.charAt(i);
        }
        return r;
    }

    public static void main(String[] args) {
        //int size = 0;
        String str;
        int ro;
        Scanner dc = new Scanner(System.in);
        //size=sc.nextInt();
        str = dc.next();
        ro = dc.nextInt();
        System.out.println(caesarCipher(str, ro));
    }
}


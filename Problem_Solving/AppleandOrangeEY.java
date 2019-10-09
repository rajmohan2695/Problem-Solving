
//Hackerraank Problem : https://www.hackerrank.com/challenges/apple-and-orange/problem
package Problem_Solving;

import java.util.Scanner;

public class AppleandOrangeEY {
    public static void countApplesAndOranges(int s, int t, int a, int b, int[] apples, int[] oranges) {
        int apple=0;
        int orange=0;
        for(int i=0;i<=apples.length+oranges.length-1;i++){
            if(i<apples.length&&((a+apples[i])>=s)&&((a+apples[i])<=t)) {
                apple++;
            }
            else if((i>=apples.length)&&((b+oranges[i-apples.length])<=t)&&((b+oranges[i-apples.length])>=s))
                orange++;
        }
        System.out.println(apple);
        System.out.println(orange);
    }

    public static void main(String[] args) {
        int a[]={-2,2,1};
        int b[]={5,-6};
        countApplesAndOranges(7,11,5,15,a,b);
//        int[] a = new int[6];
//        Scanner scan = new Scanner(System.in);
//        int k=6;
//        int apples=0;
//        int oranges=0;
//        boolean in = false;
//         for(int i=0;i<k;i++){
//             if(in == false){
//
//             }
//         }
    }
}

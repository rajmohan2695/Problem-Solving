/*
Leetcode 70. Climbing Stairs (easy)

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:
Input: 2
Output: 2

Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: 3
Output: 3

Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

package Problem_Solving;

public class ClimbingStairsEY {
    public static int steps(int steps){
        if(steps<=1){
            return 1;
        }
        int[] ways = new int[steps+1];
        ways[0]=1;
        ways[1]=1;
        for(int i=2;i<=steps;i++)
            ways[i]=ways[i-2]+ways[i-1];
        return ways[steps];
    }
    public static void main(String[] args) {
        System.out.println(steps(5));
    }
}

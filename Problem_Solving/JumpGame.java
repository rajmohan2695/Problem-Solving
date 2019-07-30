/*
Leetcode 55. Jump Game

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
 */

package Problem_Solving;

public class JumpGame {
    public static void main(String[] args) {
        int array[] = {2,3,1,1,4};
        int reachable=0;
        for(int i=array.length-2;i>=0;i--){
            if(array[i]<=reachable){
                reachable++;
            }
            else{
                reachable=0;
            }
        }
        System.out.println(reachable==0);
    }
}

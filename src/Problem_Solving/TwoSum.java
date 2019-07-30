/*
Leetcode 1. Two Sum

        Given an array of integers, return indices of the two numbers such that they add up to a specific target.

        You may assume that each input would have exactly one solution, and you may not use the same element twice.

        Example:

        Given nums = [2, 7, 11, 15], target = 9,

        Because nums[0] + nums[1] = 2 + 7 = 9,
        return [0, 1].
*/
package Problem_Solving;
import java.util.HashMap;

public class TwoSum {
    public static void main(String[] args){
        int[] a={2,7,11,15};
        int target = 9;

        HashMap sum = new HashMap();

        for(int i=0;i<a.length;i++){
            if(sum.containsKey(target-a[i])){
                System.out.println("["+sum.get(target-a[i])+","+i+"]");
                break;
            }
            else{
                sum.put(a[i],i);
            }
        }
    }
}

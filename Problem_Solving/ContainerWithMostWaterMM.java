/*
Leetcode 11. Container With Most Water (Medium)

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are
drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a
container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the
container can contain is 49.

Example:
Input: [1,8,6,2,5,4,8,3,7]
Output: 49

 */

package Problem_Solving;

public class ContainerWithMostWaterMM {
    public static int maxArea(int[] height) {
        int max = 0;
        for (int i = 0; i < height.length; i++) {
            for (int j = height.length - 1; j >= 0; j--) {
                if (height[i] <= height[j]) {
                    if (max < height[i] * (j - i)) {
                        max = height[i] * (j - i);
                    }
                    break;
                } else if (max < (height[j] * (j - i))) {
                    max = height[j] * (j - i);
                }
            }
        }
        return max;
    }

    public static void main(String[] args) {
        int a[] = {2, 3, 4, 5, 18, 17, 6};
        System.out.println(maxArea(a));
    }
}

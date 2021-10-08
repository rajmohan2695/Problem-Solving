/*
    Leetcode - 167: Two Sum II - Input array is sorted (Easy)

    Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
    Let these two numbers be numbers[index1] and numbers[index2] where 1 <= first < second <= numbers.length.
    Return the indices of the two numbers, index1 and index2, as an integer array [index1, index2] of length 2.
    The tests are generated such that there is exactly one solution. You may not use the same element twice.

    Example 1:
    Input: numbers = [2,7,11,15], target = 9
    Output: [1,2]
    Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

    Example 2:
    Input: numbers = [2,3,4], target = 6
    Output: [1,3]
    Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3.

    Example 3:
    Input: numbers = [-1,0], target = -1
    Output: [1,2]
    Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2.
 */

    // Solution: 1 - Linear
    var twoSum = function(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;
        while (l < r) {
            const currentValue = numbers[l]+numbers[r];
            if (currentValue < target)
                l++;
            else if(currentValue > target)
                r--;
            else
                return [l+1, r+1];
        }
    };

    // Solution: 2 - Using Map (Also linear)
    var twoSum = function(numbers, target) {
        const indices = new Map();
        let result = [];
        while(numbers.length) {
            const number = numbers.pop();
            if (indices.get(target - number)) {
                result = [(numbers.length), indices.get(target - number)];
                break;
            }
            indices.set(number, (numbers.length));
        }
        return result.length ? [result[0]+1, result[1]+1] : [];
    };

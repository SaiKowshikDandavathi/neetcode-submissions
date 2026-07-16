/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {

    let sum = 0;
    let average = 0;
    let maxSum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }

    maxSum = sum

    for (let j = k; j < nums.length ; j++) {
        sum -= nums[j - k];
        sum += nums[j]
        maxSum = Math.max(sum, maxSum)
    }



    return nums.length > k ? maxSum / k : maxSum / nums.length;

};
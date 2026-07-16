/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let maxValue = 0
    let prevSum = 0
    for (let i = 0; i < k; i++) {
        maxValue += nums[i]
        prevSum = maxValue
    }
    for (let i = k; i < nums.length; i++) {
        let currentSum = (prevSum + nums[i]) - nums[i - k]
        maxValue = Math.max(currentSum, maxValue)
        prevSum = currentSum
    } 
    maxValue = nums.length > k ? maxValue/k : maxValue/nums.length
    return maxValue

};
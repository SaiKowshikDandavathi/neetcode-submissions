/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {

    let start = 0, end = 0

    while (end < nums.length) {
        console.log(start, end, k)
        if (!nums[end]) k--
        if (k < 0) {
            if (nums[start] === 0) k++
            start++
        }
        end++
    } return end - start

};
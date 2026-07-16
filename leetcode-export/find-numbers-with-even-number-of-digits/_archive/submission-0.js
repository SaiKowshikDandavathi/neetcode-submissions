/**
 * @param {number[]} nums
 * @return {number}
 */
const getDigits = (val) => {
    return Math.floor(Math.log10(Math.abs(val))) + 1
}
var findNumbers = function (nums) {
    let returnValue = 0
    for (let i = 0; i < nums.length; i++) {
        if (getDigits(nums[i]) % 2 === 0) returnValue++
    }
    return returnValue
};
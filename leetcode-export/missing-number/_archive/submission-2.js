/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let setValues = new Set(nums)
    let missedValue;
    for (let i = 0; i <= nums.length; i++){
        if(!setValues.has(i)){
            missedValue = i
            break;
        }
    } return missedValue
};
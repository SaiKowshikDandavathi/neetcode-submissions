/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let setVals = new Set(nums);
    let maxLength = nums.length + 1;
    let missingValues = []

    for (let i = 1; i < maxLength; i++) {
        if (!setVals.has(i)) {
            missingValues.push(i)
        }
    } return missingValues

};
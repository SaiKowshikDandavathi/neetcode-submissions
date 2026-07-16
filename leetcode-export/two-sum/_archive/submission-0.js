/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = []

    for (i = 0; i < nums.length; i++) {
        const secondNum = target - nums[i]
        for (j = 0; j < nums.length; j++) {
            if (nums[j] === secondNum && i !== j) {
                result.push(i,j)
                return result
            }
        }
    } return result
};
const nums = [3,3]
const target = 13

const arrayIndicies = twoSum(nums, target)

console.log(arrayIndicies)

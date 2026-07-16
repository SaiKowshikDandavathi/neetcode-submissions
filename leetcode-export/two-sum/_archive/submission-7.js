/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let res = {}
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        let lookUpValue = target - cur;
        if (lookUpValue in res) return [i, res[lookUpValue]]
        res[cur] = i
    }
};
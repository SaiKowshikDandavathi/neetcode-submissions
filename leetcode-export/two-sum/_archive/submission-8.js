/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        let diff = target - cur;
        if (diff in map) return [i, map[diff]]
        map[cur] = i;
    }
    return []

};
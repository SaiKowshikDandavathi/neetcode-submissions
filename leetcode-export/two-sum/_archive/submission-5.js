/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i]
        let diff = target - cur
        if (map.has(diff)) {
            return [i, map.get(diff)]
        }
        map.set(cur, i)
    }
    return []

};
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const hmap = new Map()

    for (let i = 0; i < nums.length; i++) {
        hmap.set(nums[i], (hmap.get(nums[i]) || 0) + 1)
    }
    let res = [...hmap].filter(e => e[1] === 1)
    return res[0][0]
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {

    const hmap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (hmap.has(nums[i])){
            return nums[i];
        }
        hmap.set(nums[i], i)
    }
    return null
};
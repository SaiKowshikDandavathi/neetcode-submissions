/**
 * @param {number[]} nums
 * @return {boolean}
 */
const divideArray = (nums) => {
    if (nums.length % 2 != 0) return false
    let hmap = new Map()

    for (const key in nums) {
        hmap.get(nums[key]) ?
            hmap.set(nums[key], hmap.get(nums[key]) + 1)
            : hmap.set(nums[key], 1)
    }
    return ![...hmap].some(e => e[1] % 2 != 0)
};
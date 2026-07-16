/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
const mostFrequent = (nums, key) => {
    let hmap = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === key) {
            hmap.get(nums[i + 1])
                ? hmap.set(nums[i + 1], hmap.get(nums[i + 1]) + 1)
                : hmap.set(nums[i + 1], 1)
        }
    }

    return [...hmap].sort((a, b) => b[1] - a[1])[0][0]
};
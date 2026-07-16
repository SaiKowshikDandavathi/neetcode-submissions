/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    const hmap = new Map()
    for (let i = 0; i < nums.length; i++) {
        hmap.get(nums[i]) ? hmap.set(nums[i], hmap.get(nums[i]) + 1) : hmap.set(nums[i], 1)
    }
    console.log(hmap)
    const res = [...hmap].sort((a, b) => b[1] - a[1])
    let out = []

    for (let i = 0; i < k; i++) {
        out.push(res[i][0])
    }   

    return out
};
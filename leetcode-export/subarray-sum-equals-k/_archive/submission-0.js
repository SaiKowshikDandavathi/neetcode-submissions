/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0;
    let sum = 0
    let hmap = new Map();
    hmap.set(0, 1)

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let rem = sum - k;
        if (hmap.has(rem)) {
            count += hmap.get(rem)
        }
        hmap.set(sum, (hmap.get(sum) || 0) + 1)
    }
    return count;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0;
    let sum = 0;
    let diff;
    const hmap = new Map();
    hmap.set(0, 1)

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        diff = sum - k;
        if (hmap.has(diff)) {
            count += hmap.get(diff)
        }
        hmap.set(sum, (hmap.get(sum) || 0) + 1)
    }

    return count;

};

/**
[1,1,1] k = 2
- sum = 1, diff = -1, hmap { 0 => 1, 1 => 1}
-- sum = 2, diff = 0 count = 1 hmap { 0 => 1, 1 => 1, 2 => 1}
-- sum = 3, diff = 1, count = 2, hmap = { 0 => 1, 1 => 1, 2 => 1, 3 => 1}


 */
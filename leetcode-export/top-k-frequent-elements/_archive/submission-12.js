/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = {};
    for (const num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    // Create buckets: index = frequency, value = array of numbers
    const buckets = Array(nums.length + 1).fill().map(() => []);
    for (const [num, freq] of Object.entries(freqMap)) {
        buckets[freq].push(Number(num));
    }

    // Gather top k frequent elements from buckets (from high freq to low)
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (const num of buckets[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }
    return result;
};
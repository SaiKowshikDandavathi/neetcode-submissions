class Solution {
    topKFrequent(nums, k) {
        const freq = new Map();
        for (const num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        // Bucket sort by frequency: index = frequency, value = list of nums
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        
        for (const [num, count] of freq) {
            buckets[count].push(num);
        }

        const res = [];
        for (let count = buckets.length - 1; count >= 0 && res.length < k; count--) {
            console.log(buckets[count])
            for (const num of buckets[count]) {
                res.push(num);
                if (res.length === k) break;
            }
        }
        return res;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (const num of nums){
            const value = map.get(num) || 0;
            map.set(num, value + 1);
        }
        const res = [...map].sort((a,b) => b[1]- a[1]).map(e => e[0]);
        return res.slice(0,k);
             
    }
}

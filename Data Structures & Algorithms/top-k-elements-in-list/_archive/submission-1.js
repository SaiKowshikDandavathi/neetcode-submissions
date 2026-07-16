class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if(nums.length === 0) return [];
        let hashMap = new Map();
        for (const num of nums){
            let value = hashMap.get(num) || 0;
            hashMap.set(num, value + 1);
        }
        const sortedHashMap = [...hashMap].sort((a,b) => b[1] - a[1]);
        const result = [];
        for(let i = 0; i < k; i++){
            result.push(sortedHashMap[i][0])
        }
        return result
    }

}

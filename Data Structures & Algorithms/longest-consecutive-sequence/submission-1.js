class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0
        const setValues = new Set([...nums]);
        let maxValue = 1;
        for (let num of nums) {
            let val = 1;
            while (setValues.has(num - 1)) {
                val++;
                num -= 1;
            }
            maxValue = Math.max(val, maxValue);
        }
        return maxValue;
    }
}

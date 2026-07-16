class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        const setValues = new Set(nums);
        let maxValue = 1;
        for (let num of nums) {
            if (!setValues.has(num - 1)) {
                let streak = 1;
                while (setValues.has(num + streak)) {
                    streak++;
                }
                maxValue = Math.max(streak, maxValue);
            }
        }
        return maxValue;
    }
}

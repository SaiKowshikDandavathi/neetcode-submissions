/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 [2,7,9,3,1,9] --> 20
 
 []
 */
var rob = function (nums) {
    const dp = Array.from(nums.length + 1).fill(0);
    dp[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const cur = nums[i];
        const beforePrev = (i - 2 >= 0) ? dp[i - 2] : 0;
        dp[i] = Math.max(cur + beforePrev, dp[i - 1]);
    }
    console.log(dp)
    return Math.max(...dp)

};
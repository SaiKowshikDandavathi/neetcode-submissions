/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {

    const totalSum = nums.reduce((sum, cur) => sum + cur, 0);

    const dp = new Array(totalSum + 1).fill(false)
    dp[0] = true

    if (totalSum % 2 !== 0) return false;
    const targetSum = totalSum / 2;

    for (const num of nums) {
        for (let i = targetSum; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num]
        }
    }

    console.log(dp)

    return dp[targetSum]

};

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Leftover `console.log(dp)` debug statement before the return.
 * - Algorithm is the standard optimal 0/1-knapsack subset-sum DP:
 *   O(n * sum) time, O(sum) space, iterating `i` downward to avoid
 *   reusing a number twice in the same subset — correct.
 * - The `totalSum % 2 !== 0` odd-sum check happens *after* allocating
 *   the O(sum) `dp` array, so an odd-sum input still pays for a
 *   (potentially large) array allocation it doesn't need.
 *
 * Areas of improvement:
 * - Remove the console.log.
 * - Move the odd-sum early return above the `dp` array allocation.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var canPartition = function (nums) {
    const totalSum = nums.reduce((sum, cur) => sum + cur, 0);
    if (totalSum % 2 !== 0) return false;

    const targetSum = totalSum / 2;
    const dp = new Array(targetSum + 1).fill(false);
    dp[0] = true;

    for (const num of nums) {
        for (let i = targetSum; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }

    return dp[targetSum];
};
*/
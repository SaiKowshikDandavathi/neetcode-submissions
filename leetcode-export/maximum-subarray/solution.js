/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = nums[0]
    let curSum = 0
    for (let i = 0; i < nums.length; i++) {
        if (curSum < 0) {
            curSum = 0
        }
        curSum = curSum + nums[i]
        maxSum = Math.max(maxSum, curSum)
    } return maxSum

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - This is already Kadane's algorithm at the optimal O(n) time,
 *   O(1) space — nothing to fix algorithmically.
 * - Minor style nit: resetting `curSum` to 0 before adding `nums[i]`
 *   (instead of the more common one-liner
 *   `curSum = Math.max(nums[i], curSum + nums[i])`) is an equivalent
 *   but slightly less idiomatic way to express Kadane's recurrence.
 *
 * Areas of improvement:
 * - Purely stylistic: could collapse the reset-then-add into the
 *   single `Math.max(nums[i], curSum + nums[i])` idiom most engineers
 *   expect to see for this problem.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var maxSubArray = function (nums) {
    let maxSum = nums[0];
    let curSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        curSum = Math.max(nums[i], curSum + nums[i]);
        maxSum = Math.max(maxSum, curSum);
    }

    return maxSum;
};
*/
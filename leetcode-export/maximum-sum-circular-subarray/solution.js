/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {

    let max = nums[0];
    let min = nums[0];
    let curMax = 0;
    let curMin = 0;
    let n = nums.length;
    let total = 0;


    for (let i = 0; i < n; i++) {
        curMax = Math.max(curMax, 0) + nums[i]
        max = Math.max(curMax, max)

        curMin = Math.min(curMin, 0) + nums[i]
        min = Math.min(curMin, min)
        total += nums[i];
    }

    console.log(max,min,total)

    if (total === min) {
        return max
    }

    return Math.max(max, total - min)

};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Leftover `console.log(max,min,total)` debug statement in the
 *   middle of the function.
 * - Algorithm itself is correct and optimal: two Kadane passes for
 *   max and min subarray sums in O(n) time, O(1) space, with the
 *   `total === min` guard correctly handling the all-negative case
 *   (where excluding the min subarray would leave an empty array).
 *
 * Areas of improvement:
 * - Remove the console.log.
 * - `total === min` works to detect "all elements negative" but is a
 *   slightly indirect signal; comparing `max < 0` (equivalently,
 *   checking if every element was negative during the loop) reads
 *   more directly, though the current check is not wrong.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var maxSubarraySumCircular = function (nums) {
    let max = nums[0];
    let min = nums[0];
    let curMax = 0;
    let curMin = 0;
    let total = 0;

    for (const num of nums) {
        curMax = Math.max(curMax, 0) + num;
        max = Math.max(max, curMax);

        curMin = Math.min(curMin, 0) + num;
        min = Math.min(min, curMin);

        total += num;
    }

    if (max < 0) return max; // all numbers negative
    return Math.max(max, total - min);
};
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {

    let sum = 0

    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    let max = sum;
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k]
        max = Math.max(sum, max)
    }
    return max / k

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Already the optimal sliding-window-sum approach: O(n) time, O(1)
 *   space, correctly maintains a running sum instead of recomputing
 *   each window's sum from scratch (which would be O(n*k)).
 * - No guard for `k > nums.length`, though the problem's constraints
 *   guarantee `k <= nums.length`, so this is a non-issue in practice —
 *   worth noting only for robustness against malformed input.
 *
 * Areas of improvement:
 * - Nothing algorithmically significant; this is clean and correct as
 *   written. Optionally rename `max`/`sum` to `maxSum`/`windowSum` for
 *   a touch more clarity on what they track.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var findMaxAverage = function (nums, k) {
    // Sliding window sum: maintain a running total, add the entering
    // element and subtract the one that leaves. O(n) time, O(1) space.
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxSum = windowSum;
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum / k;
};
*/
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
    return Math.max(...dp)

};

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - `Array.from(nums.length + 1).fill(0)` doesn't do what it looks
 *   like it does: `Array.from` on a bare number (not `{length: n}` or
 *   an iterable) produces an **empty** array, so `.fill(0)` fills
 *   nothing. The code only works because every `dp[i]` is written
 *   before it's read (JS arrays grow on assignment) — it's a latent
 *   bug that happens not to manifest, not an intentional O(n) space
 *   pre-allocation. Compare to house-robber-ii's `Array.from({ length:
 *   nums.length })`, which does pre-size correctly.
 * - No guard for `nums.length === 0`: `dp[0] = nums[0]` sets
 *   `dp[0] = undefined`, and `Math.max(...dp)` returns `NaN`.
 * - Uses O(n) space for the `dp` array when the recurrence only ever
 *   needs the previous two values — O(1) space is achievable and is
 *   the expected optimization for this classic problem.
 *
 * Areas of improvement:
 * - Fix the `Array.from` call (or drop the array entirely — see
 *   below) and add an explicit `if (nums.length === 0) return 0`
 *   guard.
 * - Collapse to two rolling variables instead of a full `dp` array to
 *   reach O(1) space.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var rob = function (nums) {
    // Rolling DP: prev2 = best up through i-2, prev1 = best up
    // through i-1. O(n) time, O(1) space.
    if (nums.length === 0) return 0;

    let prev2 = 0;
    let prev1 = 0;

    for (const cur of nums) {
        const takeCurrent = cur + prev2;
        [prev2, prev1] = [prev1, Math.max(takeCurrent, prev1)];
    }

    return prev1;
};
*/
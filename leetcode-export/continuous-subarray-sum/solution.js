/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    let prefix = 0
    let sum = 0
    let hash = new Set()

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (k != 0) sum %= k
        if (hash.has(sum)) return true
        hash.add(prefix)
        prefix = sum
    }
    console.log(hash)
    return false

};

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - `console.log(hash)` on line 18 is a leftover debug statement
 *   that runs on every failed call — dead code that should be
 *   removed before this is considered interview-ready.
 * - The delayed-insertion trick (adding `prefix`, the *previous*
 *   iteration's remainder, rather than the current one) is what
 *   enforces the "subarray length >= 2" constraint, but nothing in
 *   the code explains this. A reader has to reverse-engineer why
 *   `hash.add(prefix)` uses the stale value instead of `sum`.
 * - Variable names `prefix`/`sum` are used in a slightly confusing
 *   way — `sum` is actually the running remainder mod k, not a raw
 *   sum, once the loop passes iteration 0.
 *
 * Areas of improvement:
 * - Remove the debug console.log.
 * - Rename `sum` to `remainder` and add a short comment explaining
 *   the one-step-delayed insertion (or switch to the more common
 *   index-based approach: store `remainder -> firstIndex` and check
 *   `i - firstIndex > 1`, which is more explicit about the length
 *   constraint).
 * - Complexity is already optimal: O(n) time, O(min(n, k)) space.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var checkSubarraySum = function (nums, k) {
    // remainder -> earliest index at which this prefix-sum remainder was seen
    const firstIndexForRemainder = new Map([[0, -1]]);
    let runningSum = 0;

    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];
        const remainder = k === 0 ? runningSum : runningSum % k;

        if (firstIndexForRemainder.has(remainder)) {
            if (i - firstIndexForRemainder.get(remainder) > 1) return true;
        } else {
            firstIndexForRemainder.set(remainder, i);
        }
    }

    return false;
};
*/
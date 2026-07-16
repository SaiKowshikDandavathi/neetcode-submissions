/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {

    let start = 0, end = 0

    while (end < nums.length) {
        // console.log(start, end, k)
        if (!nums[end]) k--
        if (k < 0) {
            if (nums[start] === 0) k++
            start++
        }
        end++
    } return end - start

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Already the optimal sliding-window approach: O(n) time, O(1)
 *   space, single pass, correctly tracks the remaining flip budget
 *   `k` and shrinks the window only when it's exhausted.
 * - Minor nit: `end - start` at the end is computed after `end` has
 *   already been incremented past the last valid window in the final
 *   iteration, which works out correctly, but naming the loop
 *   variables `start`/`end` for what's really a `left`/`right` window
 *   is a small readability inconsistency with the rest of the repo's
 *   sliding-window solutions (which mostly use `left`/`right`).
 *
 * Areas of improvement:
 * - Rename `start`/`end` to `left`/`right` for consistency with other
 *   sliding-window solutions in this repo.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var longestOnes = function (nums, k) {
    // Sliding window: expand right always, shrink left only when the
    // flip budget k is exhausted. O(n) time, O(1) space.
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) k--;
        if (k < 0) {
            if (nums[left] === 0) k++;
            left++;
        }
    }

    return nums.length - left;
};
*/
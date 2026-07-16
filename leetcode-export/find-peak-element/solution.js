/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] > nums[mid + 1]) right = mid
        else left = mid + 1
    } return left

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - No inline explanation of the binary-search invariant (why comparing
 *   nums[mid] to nums[mid+1] and discarding the non-increasing half is
 *   safe); fine for the author, but a reviewer/interviewer has to
 *   re-derive it.
 * - `return left` is tacked onto the closing brace of the while loop on
 *   the same line, which is a minor readability nit.
 *
 * Areas of improvement:
 * - Add a one-line comment stating the invariant ("nums[-1] and
 *   nums[n] are treated as -infinity, so a peak always exists").
 * - Put `return left` on its own line for consistency with the rest of
 *   the codebase's formatting.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var findPeakElement = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    // Binary search: nums[-1] and nums[n] are conceptually -Infinity,
    // so walking toward the larger neighbor always converges on a peak.
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
*/
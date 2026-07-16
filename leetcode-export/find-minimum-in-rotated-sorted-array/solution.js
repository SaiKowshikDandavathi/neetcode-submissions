var findMin = function (nums) {
    let left = 0
    let right = nums.length - 1

    while (left < right) {

        let mid = Math.floor(left + (right - left) / 2);

        if (nums[right] > nums[mid]) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return nums[left]
}

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Already the optimal approach: binary search comparing
 *   `nums[mid]` against `nums[right]` to decide which half
 *   contains the rotation point, O(log n) time, O(1) space. This
 *   is the well-known best solution for this problem (a linear
 *   scan would be O(n) and worse).
 * - Correctly handles a non-rotated (already sorted) array and a
 *   single-element array (`left === right` immediately, loop never
 *   runs, returns the only element).
 * - Missing the standard JSDoc parameter/return comment block that
 *   every other solution in this repo has.
 *
 * Areas of improvement:
 * - Add the `@param {number[]} nums` / `@return {number}` JSDoc
 *   header for consistency with the rest of the codebase.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
// @param {number[]} nums
// @return {number}
var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
};
*/
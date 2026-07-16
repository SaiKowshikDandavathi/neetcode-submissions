/**
 * @param {number[]} nums
 * @return {number[]}
 */
const resultArray = (nums) => {
    let arr1 = []
    let arr2 = []
    for (let i = 0; i < nums.length; i++) {
        if (arr1.length === 0) {
            arr1.push(nums[i])
        }
        else if (arr2.length === 0) {
            arr2.push(nums[i])
        }
        else if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
            arr1.push(nums[i])
        } else {
            arr2.push(nums[i])
        }
    }
    return arr1.concat(arr2)
};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Correctly implements the simulation described by the problem
 *   (first two elements seed each array, then each subsequent
 *   element goes to whichever array currently has the greater
 *   last element). O(n) time, O(n) space — this is already optimal
 *   since the output itself is O(n).
 * - The `if (arr1.length === 0)` / `else if (arr2.length === 0)`
 *   checks only matter for `i === 0` and `i === 1`; folding those
 *   into the loop for every iteration is slightly wasteful but has
 *   no effect on asymptotic complexity.
 *
 * Areas of improvement:
 * - Could special-case the first two elements before the loop and
 *   start iteration at `i = 2`, saving two redundant length checks
 *   per call — a micro-optimization, not a correctness issue.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
const resultArray = (nums) => {
    const arr1 = [nums[0]];
    const arr2 = [nums[1]];

    for (let i = 2; i < nums.length; i++) {
        if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
            arr1.push(nums[i]);
        } else {
            arr2.push(nums[i]);
        }
    }

    return arr1.concat(arr2);
};
*/
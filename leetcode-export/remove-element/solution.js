/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {

    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== val){
            nums[k] = nums[i];
            k++
        }
    }
    return k
};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Nothing functionally wrong; the only nit is a stray blank line right
 *   after the function signature that adds no value.
 *
 * Areas of improvement:
 * - Minor formatting cleanup only (remove the leading blank line).
 * - Already the optimal in-place two-pointer solution: O(n) time, O(1)
 *   extra space, correctly handles empty arrays and no-match cases.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var removeElement = function (nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
*/
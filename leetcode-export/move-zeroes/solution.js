/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {

    for (let left = 0, right = 0; right < nums.length; right++) {

        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
        }
    }
    return nums


};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct and optimal two-pointer in-place swap: O(n) time, O(1)
 *   extra space. Handles all-zero and no-zero arrays correctly since
 *   `left` and `right` just never diverge/converge to no-ops in those
 *   cases.
 * - `return nums` is unnecessary — the problem statement explicitly
 *   says "modify nums in-place instead" and doesn't use a return
 *   value, so returning it is dead output (harmless on LeetCode's
 *   harness, but signals a misunderstanding of the in-place contract).
 *
 * Areas of improvement:
 * - Drop the `return nums` statement (or explicitly return nothing)
 *   to match the in-place, void contract described in the docstring.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var moveZeroes = function (nums) {
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
    }
};
*/
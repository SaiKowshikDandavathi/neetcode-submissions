/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k  = 0

    for (let i = 0; i < nums.length; i++){
        if(nums[i] !== nums[i-1]){
            nums[k] = nums[i]
            k++
        }
    }
    return k

};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Relies on `nums[i - 1]` being `undefined` on the first iteration
 *   (`i === 0`), which happens to compare unequal to any number and works,
 *   but it's an implicit reliance on JS's out-of-bounds-array behavior
 *   rather than an explicit base case — a reader has to reason about
 *   `undefined !== nums[0]` to see why `k` starts at 0 correctly.
 *
 * Areas of improvement:
 * - Make the first-element case explicit (e.g. start the loop at `i = 1`
 *   and pre-seed `k = 1`, guarded by `nums.length > 0`) so the logic
 *   doesn't depend on implicit `undefined` comparisons.
 * - Otherwise this is the optimal in-place two-pointer approach: O(n) time,
 *   O(1) space, and (unlike a sibling submission in _archive that started
 *   `k` at 1 and iterated from `i = 1`) this version correctly returns 0
 *   for an empty input array.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
*/
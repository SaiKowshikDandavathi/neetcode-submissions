/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    const ans = new Array(2 * nums.length)

    for (let i = 0; i < ans.length; i++) {
        const numIndex = i % nums.length;
        ans[i] = nums[numIndex]
    }
    // console.log(ans)
    return ans

};
/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct and optimal — O(n) time, O(n) space (required, since the
 *   output is exactly 2n elements), pre-allocating the result array with
 *   `new Array(2 * nums.length)` instead of growing it dynamically.
 * - Leftover commented-out `// console.log(ans)` debug line should be
 *   removed before an interview review — small, but worth cleaning up.
 *
 * Areas of improvement:
 * - Remove the commented-out console.log.
 * - Could alternatively write it as
 *   `[...nums, ...nums]` for brevity, though the explicit loop is not
 *   worse and is arguably clearer about the O(n) allocation behavior.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var getConcatenation = function (nums) {
    const ans = new Array(2 * nums.length);

    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[i];
        ans[i + nums.length] = nums[i];
    }

    return ans;
};
*/

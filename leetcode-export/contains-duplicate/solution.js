/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const setVal = new Set(nums)
    return setVal.size != nums.length

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Already the asymptotically optimal approach: O(n) time, O(n)
 *   space via a Set, correctly handles empty arrays (size 0 ==
 *   length 0 -> false) and single elements (size 1 == length 1 ->
 *   false).
 * - Minor style nit: uses `!=` instead of strict `!==`, and there's
 *   a stray trailing blank line with trailing whitespace before the
 *   closing brace.
 *
 * Areas of improvement:
 * - Switch to `!==` for consistency with strict-equality best
 *   practice (no functional difference here since both sides are
 *   numbers).
 * - Trim the trailing whitespace/blank line.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var containsDuplicate = function (nums) {
    return new Set(nums).size !== nums.length;
};
*/
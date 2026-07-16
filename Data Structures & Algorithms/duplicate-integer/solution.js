class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return nums.length != new Set(nums).size
    }
}

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Already the optimal approach: building a Set is O(n) time and
 *   O(n) space, which is as good as this problem gets without
 *   sorting in place (which would be O(n log n)). Handles empty
 *   array and single element correctly (both return false).
 *
 * Areas of improvement:
 * - Uses loose inequality `!=` instead of strict `!==`. Both work
 *   here since both operands are always numbers, but `!==` is the
 *   safer default/convention in JS.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    hasDuplicate(nums) {
        return new Set(nums).size !== nums.length;
    }
}
*/

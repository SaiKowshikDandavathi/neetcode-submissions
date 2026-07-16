/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    /**
    construct a hashmap and check if the value is same as other hmap and is in range
     */

    const hmap = new Map();

    for (let i = 0; i < nums.length; i++) {
        // console.log(hmap, nums[i])

        if (Math.abs(i - hmap.get(nums[i])) <= k) {
            return true
        }
        hmap.set(nums[i], i)
    }
    return false

};

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - `hmap.get(nums[i])` returns `undefined` for a value not yet
 *   seen, so `Math.abs(i - undefined)` evaluates to `NaN`, and
 *   `NaN <= k` is `false`. The code relies on this implicit
 *   coercion instead of an explicit `hmap.has(nums[i])` check —
 *   it's correct but obscure, and would confuse a reviewer or a
 *   future editor into thinking it's a bug.
 * - The leftover commented-out `// console.log(hmap, nums[i])`
 *   is dead code that should have been removed before submitting.
 * - The doc-comment describing the approach is placed inside the
 *   function body instead of above it, mixing implementation
 *   commentary with the JSDoc block already provided.
 *
 * Areas of improvement:
 * - Use `hmap.has(nums[i]) && i - hmap.get(nums[i]) <= k` for a
 *   self-documenting check instead of relying on NaN comparisons.
 * - Remove the dead console.log comment.
 * - Time/space are already optimal: O(n) time, O(min(n, k+1))
 *   space if trimming old entries were added, though O(n) space
 *   as written is still acceptable for this constraint size.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var containsNearbyDuplicate = function (nums, k) {
    const lastSeenIndex = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (lastSeenIndex.has(nums[i]) && i - lastSeenIndex.get(nums[i]) <= k) {
            return true;
        }
        lastSeenIndex.set(nums[i], i);
    }

    return false;
};
*/
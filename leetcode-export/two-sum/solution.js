/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hmap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (hmap.has(diff)) return [hmap.get(diff), i]
        hmap.set(nums[i], i)
    }
    return []

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Single-pass hashmap lookup: O(n) time, O(n) space, and it
 *   correctly returns as soon as a match is found rather than
 *   building the full map first. Handles duplicate values correctly
 *   since it checks for `diff` before inserting the current number,
 *   so `nums[i]` never pairs with itself.
 * - Missing semicolons after `if (...) return [...]` and
 *   `hmap.set(...)` are a minor style inconsistency vs. the rest.
 * - `return []` as a fallback is defensive but technically dead code
 *   under LeetCode's guarantee that exactly one solution exists.
 *
 * Areas of improvement:
 * - Add missing semicolons for consistency.
 * - Could drop the fallback `return []` given the problem guarantee,
 *   though keeping it is harmless defensive coding.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var twoSum = function (nums, target) {
    const seen = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }

    return [];
};
*/
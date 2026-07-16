/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    /**
        * Hashmap to map the elements, get min and max in same loop
        * An array to map the seen
     */

    if (!nums) return 0

    let map = new Set(nums);
    let maxCount = 0;

    for (let num of map) {
        if (!map.has(num - 1)) {
            let currentStreak = 1;
            while (map.has(num + 1)) {
                currentStreak += 1;
                num = num + 1;
            }
            maxCount = Math.max(currentStreak, maxCount);
        }
    }
    return maxCount

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Already the optimal approach: a `Set` for O(1) lookups, only
 *   starting a streak count from numbers that are the *start* of a
 *   sequence (`!map.has(num - 1)`), giving an overall O(n) time
 *   despite the nested `while` — each number is visited by the inner
 *   loop at most once across the whole run.
 * - Minor nit: `if (!nums)` guards against `nums` being `null`/
 *   `undefined`, but not against `nums` being an empty array (`[]` is
 *   truthy). It happens to still work correctly for `[]` since
 *   `new Set([])` is empty and the `for` loop simply doesn't execute,
 *   returning `0` — so this isn't a bug, just a slightly misleading
 *   guard that doesn't do what its placement suggests.
 * - Variable name `map` for a `Set` is a bit misleading — `set` or
 *   `numSet` would better match what it actually is.
 *
 * Areas of improvement:
 * - Rename `map` to `numSet` (or similar) since it's a `Set`, not a
 *   map, to avoid confusing future readers.
 * - If the `null`/`undefined` guard is intentional, a clearer
 *   `if (!nums || nums.length === 0) return 0` documents the intent
 *   explicitly, though the current code already handles both cases
 *   correctly in practice.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var longestConsecutive = function (nums) {
    // Only start counting from the beginning of a run (no num-1 in the
    // set), so every number is visited by the inner while loop at most
    // once across the whole function. O(n) time, O(n) space.
    const numSet = new Set(nums);
    let longest = 0;

    for (const num of numSet) {
        if (numSet.has(num - 1)) continue;

        let length = 1;
        let current = num;
        while (numSet.has(current + 1)) {
            current++;
            length++;
        }
        longest = Math.max(longest, length);
    }

    return longest;
};
*/
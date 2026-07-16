/**
 * @param {number[]} nums
 * @return {boolean}
 */
const divideArray = (nums) => {
    if (nums.length % 2 != 0) return false
    let hmap = new Map()

    for (const key in nums) {
        hmap.get(nums[key]) ?
            hmap.set(nums[key], hmap.get(nums[key]) + 1)
            : hmap.set(nums[key], 1)
    }
    return ![...hmap].some(e => e[1] % 2 != 0)
};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - `for (const key in nums)` iterates array indices as strings
 *   (`for...in` walks enumerable property keys, not values). It
 *   happens to work here because `nums[key]` still auto-coerces
 *   the string index back to the correct element, but `for...in`
 *   on arrays is a well-known JS antipattern (it also picks up any
 *   non-index enumerable properties, which isn't a concern for a
 *   plain array literal but is a fragile habit).
 * - The ternary-as-statement for counting (`hmap.get(...) ? set(...)
 *   : set(...)`) is harder to scan than the conventional
 *   `(hmap.get(x) || 0) + 1` idiom used elsewhere in this repo.
 * - Correct and optimal otherwise: O(n) time, O(n) space, and the
 *   early `nums.length % 2 != 0` check is a nice short-circuit
 *   (odd-length arrays can never be paired).
 *
 * Areas of improvement:
 * - Use `for (const num of nums)` instead of `for...in`.
 * - Replace the ternary-set pattern with `hmap.set(num,
 *   (hmap.get(num) || 0) + 1)` for consistency with idiomatic
 *   counting elsewhere.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
const divideArray = (nums) => {
    if (nums.length % 2 !== 0) return false;

    const counts = new Map();
    for (const num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }

    return [...counts.values()].every(count => count % 2 === 0);
};
*/
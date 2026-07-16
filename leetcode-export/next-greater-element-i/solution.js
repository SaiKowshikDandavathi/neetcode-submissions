/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {

    let map = {};
    let stack = [];

    nums2.forEach(n => {
        while (stack.length && stack[stack.length - 1] < n) {
            map[stack.pop()] = n
        }
        stack.push(n)
    })
    return nums1.map(n => map[n] || -1)

};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct and optimal: single monotonic-decreasing-stack pass over
 *   `nums2` (O(n2)) plus an O(n1) map lookup, so O(n1 + n2) time
 *   overall and O(n2) space — this is the standard optimal solution.
 * - `map[n] || -1` is a latent landmine: it relies on the LeetCode
 *   constraint that all values are positive (1 <= nums1[i], nums2[i]),
 *   so a mapped value of `0` never happens to collide with the
 *   falsy-`||` fallback. If this were reused for arrays that could
 *   contain 0, it would silently return -1 for a genuinely-found
 *   answer of `0`. Using a `Map` with `.has()`/`.get()` (already done
 *   for the intermediate `map`, just via a plain object instead) would
 *   remove the assumption entirely.
 *
 * Areas of improvement:
 * - Use `map[n] ?? -1` (nullish coalescing) or a real `Map` with
 *   `.has()` instead of `||`, so the logic doesn't depend on the
 *   positive-values constraint holding.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var nextGreaterElement = function (nums1, nums2) {
    const nextGreater = new Map();
    const stack = [];

    for (const n of nums2) {
        while (stack.length && stack[stack.length - 1] < n) {
            nextGreater.set(stack.pop(), n);
        }
        stack.push(n);
    }

    return nums1.map(n => nextGreater.get(n) ?? -1);
};
*/
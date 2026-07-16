/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    s = s.split("")
    const swap = (arr, ele1, ele2) => {
        [arr[ele1], arr[ele2]] = [arr[ele2], arr[ele1]];
    };
    for (let i = 0; i < s.length; i += (k * 2)) {
        let left = i;
        let right = Math.min(i + k - 1, s.length - 1);
        while (left < right) {
            swap(s, left, right)
            left++;
            right--;
        }
    }
    return s.join("")
};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - The `swap` helper is redefined on every call to `reverseStr` (it's a
 *   local const inside the function body) rather than being a standalone
 *   utility — harmless for correctness but means it's recreated needlessly
 *   if this were called repeatedly in a hot loop.
 *
 * Areas of improvement:
 * - Minor: could hoist `swap` out of the function if reused elsewhere, but
 *   for a single LeetCode submission this is a non-issue.
 * - Complexity is already optimal: O(n) time, O(n) space (unavoidable
 *   since JS strings are immutable and must be converted to an array),
 *   correctly reverses only the first `k` of every `2k` block and handles
 *   the tail chunk shorter than `k` via `Math.min`.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var reverseStr = function (s, k) {
    const chars = s.split("");

    for (let i = 0; i < chars.length; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, chars.length - 1);
        while (left < right) {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }

    return chars.join("");
};
*/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        [s[left],s[right]] = [s[right],s[left]]
        left++;
        right--;
    }
    return s

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - The problem signature documents `@return {void}` (in-place
 *   modification), but the function still `return s`s — harmless since
 *   the array is mutated in place either way, but slightly inconsistent
 *   with the documented contract.
 *
 * Areas of improvement:
 * - Drop the `return s` (or update the doc comment) to match the
 *   documented void/in-place contract.
 * - Already the optimal two-pointer in-place swap: O(n) time, O(1) extra
 *   space, correctly handles empty and single-character arrays (loop
 *   simply never executes).
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};
*/
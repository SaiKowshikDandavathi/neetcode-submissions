/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s, left = 0, right = s.length - 1, isCharRemoved = false) {

    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else if (isCharRemoved) {
            return false
        }
        else {
            return validPalindrome(s, left, right - 1, true) || validPalindrome(s, left + 1, right, true)
        }
    }

    return true


};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct greedy two-pointer with a single allowed skip: on the
 *   first mismatch it tries both "remove left char" and "remove
 *   right char" branches, each of which then runs to completion in
 *   O(n) with no further mismatches allowed — overall O(n) time,
 *   which is optimal for this problem.
 * - Threading `left`, `right`, `isCharRemoved` through as default
 *   parameters on the public `validPalindrome` signature works but
 *   leaks internal recursion state into the function's public
 *   interface — anyone calling `validPalindrome(s, 5, 2)` directly
 *   bypasses the intended API. A private inner helper would be
 *   cleaner and match the convention used elsewhere in this repo
 *   (e.g. `subsets/solution.js` uses an inner `backtrack`/helper
 *   function rather than default params on the exported function).
 *
 * Areas of improvement:
 * - Extract the recursive logic into an inner helper function so the
 *   exported `validPalindrome(s)` keeps a clean single-argument
 *   public signature.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var validPalindrome = function (s) {
    function isPalindromeRange(left, right) {
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalindromeRange(left + 1, right) || isPalindromeRange(left, right - 1);
        }
        left++;
        right--;
    }

    return true;
};
*/
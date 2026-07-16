/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    x = x.toString().split("");
    let left = 0;
    let right = x.length - 1;
    while (left < right) {
        if (x[left] === x[right]) {
            left++;
            right--;
        } else {
            return false
        }
    }
    return true

};

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Correct: two-pointer scan over the string form correctly rejects
 *   negative numbers (the leading `-` never matches the last digit)
 *   and correctly accepts 0 and single-digit numbers.
 * - Converts the number to a string and array (`x.toString().split("")`),
 *   which is O(log10 x) extra space. LeetCode explicitly poses a
 *   follow-up for this exact problem: solve it without converting to
 *   a string, using O(1) extra space by reversing only half the
 *   number mathematically.
 *
 * Areas of improvement:
 * - Reverse the second half of the number using integer math
 *   (`% 10` / `/ 10`) and compare it to the first half, avoiding the
 *   string conversion entirely — also lets you reject negatives and
 *   numbers ending in 0 (except 0 itself) up front as an O(1) check.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversedHalf = 0;
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};
*/
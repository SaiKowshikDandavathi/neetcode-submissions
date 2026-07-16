/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const isNegativeNumber = x < 0 ? true : false
    x = Math.abs(x).toString().split("");
    let left = 0
    let right = x.length - 1;

    while (left < right) {
        [x[left], x[right]] = [x[right], x[left]]
        left++;
        right--
    }
    let res = isNegativeNumber ? -Number(x.join("")) : Number(x.join(""))
    return (res > Math.pow(2, 31) || res < Math.pow(-2, 31)) ? 0 : res

};

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - Off-by-one overflow bug: the valid signed 32-bit range is
 *   [-2147483648, 2147483647], but the upper-bound check uses
 *   `res > Math.pow(2, 31)` (i.e. `> 2147483648`) instead of
 *   `> 2147483647`. That means a reversed value of exactly 2147483648
 *   would incorrectly pass through instead of triggering the required
 *   overflow return of 0.
 * - Converts to a string/array and reverses via swapping, which is
 *   correct but does more work than necessary (allocation of an array,
 *   join back to string, then `Number()`) versus building the reversed
 *   integer with pure arithmetic.
 *
 * Areas of improvement:
 * - Fix the upper bound to `Math.pow(2, 31) - 1` (or `2147483647`).
 * - Consider the digit-by-digit arithmetic approach (`% 10` / `/ 10`) to
 *   avoid string conversion and to check overflow before it happens rather
 *   than after.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var reverse = function (x) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    let res = 0;
    while (x !== 0) {
        const digit = x % 10;
        x = Math.trunc(x / 10);
        res = res * 10 + digit;
        if (res > INT_MAX || res < INT_MIN) return 0;
    }
    return res;
};
*/
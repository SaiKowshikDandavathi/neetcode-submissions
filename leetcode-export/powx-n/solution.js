/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1
    const pow = Math.abs(n)
    const result = pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x
    return n < 0 ? 1 / result : result
};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Doesn't special-case `x === 0` with negative `n`, which would divide by
 *   zero (`1 / 0 === Infinity`) instead of throwing/handling explicitly —
 *   minor since LeetCode's constraints for this problem rule it out, but
 *   worth a guard in production code.
 *
 * Areas of improvement:
 * - Add a comment or guard clarifying the `x === 0, n < 0` edge case is
 *   intentionally unhandled per problem constraints.
 * - Otherwise this is the textbook optimal fast-power (exponentiation by
 *   squaring) approach: O(log n) time, O(log n) recursion stack, correctly
 *   handles n === 0, negative n, and odd/even exponents.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var myPow = function (x, n) {
    if (n === 0) return 1;
    const half = myPow(x, Math.floor(n / 2));
    const result = half * half * (n % 2 !== 0 ? x : 1);
    return n < 0 ? 1 / result : result;
};
*/
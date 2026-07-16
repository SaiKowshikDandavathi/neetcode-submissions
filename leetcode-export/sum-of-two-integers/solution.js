/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {

    while (b) {
        let carry = a & b
        a = a ^ b
        b = carry << 1
    }
    return a

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Bitwise carry-propagation addition is the intended and optimal
 *   solution for this problem (no `+`/`-` operators used), O(1) time
 *   and space. JS's `&`, `^`, and `<<` all operate on 32-bit signed
 *   integers, so this correctly handles negative numbers and
 *   overflow/wraparound without any extra special-casing.
 * - No real flaws — this is a textbook-correct implementation.
 *
 * Areas of improvement:
 * - Purely stylistic: missing semicolons after `let carry = a & b`
 *   etc. (inconsistent with the semicolon-terminated `return a`).
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var getSum = function (a, b) {
    while (b !== 0) {
        const carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    return a;
};
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = Infinity;
    let profit = 0;

    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        profit = Math.max(profit, price - minPrice);

    }
    return profit;

};
/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - This is already the optimal one-pass approach — O(n) time, O(1) space.
 *   Tracks the running minimum price and the best profit seen so far in a
 *   single loop; correctly handles an empty/all-decreasing prices array by
 *   defaulting `profit` to 0.
 * - No real flaws — this is clean, minimal, and correct.
 *
 * Areas of improvement:
 * - Minor style nit: no explicit early return for `prices.length === 0`,
 *   but this isn't a bug — `for...of` over an empty array simply doesn't
 *   execute and `profit` (initialized to 0) is returned correctly.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var maxProfit = function (prices) {
    let minPrice = Infinity;
    let profit = 0;

    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        profit = Math.max(profit, price - minPrice);
    }
    return profit;
};
*/

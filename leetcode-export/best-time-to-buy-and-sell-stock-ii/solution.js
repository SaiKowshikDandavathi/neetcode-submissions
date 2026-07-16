/**
 * @param {number[]} prices
 * @return {number}
 * When to buy a stock ? -- If next element is greater than current element
 */
var maxProfit = function (prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        let buyPrice = prices[i - 1];
        if (prices[i] > buyPrice) {
            profit += prices[i] - buyPrice
        }
    } return profit

};
/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Correct and optimal greedy solution — O(n) time, O(1) space. Summing
 *   every positive day-over-day gain is a well-known equivalent of "buy at
 *   every local minimum, sell at every local maximum" for the unlimited-
 *   transactions variant of this problem.
 * - Handles single-element and empty arrays correctly (loop just doesn't
 *   run, profit stays 0).
 *
 * Areas of improvement:
 * - None of substance. Minor nit: `buyPrice` is a slight misnomer since
 *   this greedy formulation doesn't really "buy and hold" — it's just the
 *   previous day's price — but it doesn't hurt readability meaningfully.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var maxProfit = function (prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
};
*/

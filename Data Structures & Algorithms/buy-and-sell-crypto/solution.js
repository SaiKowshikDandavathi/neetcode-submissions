class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyPrice = Infinity;
        let profit = 0;
        for(const price of prices){
            profit = Math.max(profit, price - buyPrice);
            buyPrice = Math.min(price,buyPrice);
        }
        return profit;
    }
}

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Already the optimal single-pass approach: O(n) time, O(1) space,
 *   tracking the running minimum (`buyPrice`) and best profit so far.
 *   Handles empty/single-element arrays correctly (loop body never
 *   improves `profit`, returns 0).
 *
 * Areas of improvement:
 * - Minor style nit: `buyPrice`/`profit` naming is clear, but the
 *   update order (compute profit, then update buyPrice) is fine here
 *   since `price - buyPrice` on a new minimum day is never better
 *   than 0 — worth a one-line comment for a reader unfamiliar with
 *   the trick.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    maxProfit(prices) {
        let minPrice = Infinity;
        let profit = 0;

        for (const price of prices) {
            minPrice = Math.min(minPrice, price);
            profit = Math.max(profit, price - minPrice);
        }

        return profit;
    }
}
*/

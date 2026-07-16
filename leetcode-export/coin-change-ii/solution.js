/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    const dp = Array(amount + 1).fill(0)
    dp[0] = 1;

    for (const coin of coins) {
        for (let j = coin; j <= amount; j++) {
            dp[j] += dp[j - coin];
        }
    }
    return dp[amount]
};
/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Correct and optimal — classic unbounded-knapsack "combinations count"
 *   DP: outer loop over coins, inner loop over amounts ascending, which
 *   correctly counts combinations (not permutations) because each coin is
 *   fully processed before moving to the next. O(amount * coins.length)
 *   time, O(amount) space — this is the standard optimal complexity class
 *   for this problem.
 * - `dp[0] = 1` correctly represents the base case (one way to make
 *   amount 0: use no coins).
 * - Clean, minimal, well-named (`dp`, `amount`, `coin`, `j`).
 *
 * Areas of improvement:
 * - None of substance. Very minor: `j` as an inner-loop index is a bit
 *   terser than `amt`, but it's a completely standard convention for this
 *   pattern.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var change = function (amount, coins) {
    const dp = Array(amount + 1).fill(0);
    dp[0] = 1;

    for (const coin of coins) {
        for (let amt = coin; amt <= amount; amt++) {
            dp[amt] += dp[amt - coin];
        }
    }
    return dp[amount];
};
*/

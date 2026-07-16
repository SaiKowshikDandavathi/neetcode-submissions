/**
 * @param {number} n
 * @return {number}
 */

/**
   Given n = 2, output = 2
   n = 3, output is 3, i.e, n-2 + n-1 output values
   
 */
var climbStairs = function (n) {
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;

    function calcCombinations(n, dp) {
        if (n < 0) return 0
        if (dp[n]) return dp[n];
        // console.log(dp)
        const res = calcCombinations(n - 1, dp) + calcCombinations(n - 2, dp)
        dp[n] = res
        return res
    }

    return calcCombinations(n, dp)

};
/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - Correct, and the O(n) time top-down memoized recursion is asymptotically
 *   fine, but this problem has a well-known O(1) SPACE solution (rolling
 *   two variables, since each state only depends on the previous two) —
 *   using a full `dp` array of size `n + 1` is unnecessary extra space.
 * - `dp[0] = 0` is dead: for any `n >= 1` the recursion never reaches
 *   `calcCombinations(0, dp)` because `dp[1]`, `dp[2]`, `dp[3]` are all
 *   pre-seeded and the recursion base case (`dp[n]` truthy) returns before
 *   ever hitting index 0 — so that line does nothing.
 * - Top-down recursion also carries call-stack overhead vs. a simple
 *   iterative loop.
 *
 * Areas of improvement:
 * - Replace with an O(1)-space iterative loop using two rolling variables.
 * - Drop the unused `dp[0] = 0` line, or use the space savings from
 *   removing the array entirely.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var climbStairs = function (n) {
    let prev2 = 1; // ways to reach step 0
    let prev1 = 1; // ways to reach step 1

    for (let i = 2; i <= n; i++) {
        [prev2, prev1] = [prev1, prev1 + prev2];
    }

    return prev1;
};
*/

/* */

var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    let dp = 0, dp1 = 0, dp2 = 0;
    for (let i = 2; i <= n; i++) {
        const oneStep = dp1 + cost[i - 1];
        const twoStep = dp2 + cost[i - 2];
        dp = Math.min(oneStep, twoStep);
        dp2 = dp1;
        dp1 = dp;
    }
    return dp1;
};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Algorithm is optimal: O(n) time, O(1) space rolling DP over
 *   `dp1`/`dp2` correctly computes min cost to reach step `n`.
 * - Stray empty block comment on line 1 (an empty comment with
 *   nothing inside it) — vestigial, not doing anything (looks like a
 *   deleted JSDoc block that wasn't cleaned up).
 * - Variable name `dp` for the just-computed current value versus
 *   `dp1`/`dp2` for the two previous values is a little terse; names
 *   like `prev1`/`prev2`/`cur` would read more clearly.
 *
 * Areas of improvement:
 * - Delete the stray empty comment on line 1.
 * - Rename `dp`/`dp1`/`dp2` to something that communicates "current
 *   step" vs "one back" vs "two back" (e.g. `cur`, `oneBack`,
 *   `twoBack`).
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var minCostClimbingStairs = function (cost) {
    let oneBack = 0;
    let twoBack = 0;

    for (let i = 2; i <= cost.length; i++) {
        const cur = Math.min(oneBack + cost[i - 1], twoBack + cost[i - 2]);
        twoBack = oneBack;
        oneBack = cur;
    }

    return oneBack;
};
*/

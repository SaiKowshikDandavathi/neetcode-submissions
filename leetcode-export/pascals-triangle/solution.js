/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

    const dp = Array.from({ length: numRows }, (_, idx) => Array.from({ length: idx + 1 }).fill(1))

    for (let i = 2; i < numRows; i++) {

        const prev = dp[i - 1];
        let left = 0;
        let right = 1;

        for (let j = 1; j < dp[i].length - 1; j++) {
            dp[i][j] = Math.max((prev[left] || 0) + (prev[right] || 0), dp[i][j]);
            left++;
            right++
        }

    }
    // console.log(dp)
    return dp

};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - O(numRows^2) time/space, which is optimal here since the output
 *   itself has O(numRows^2) total elements.
 * - Leftover commented-out `// console.log(dp)` debug line.
 * - Using `Math.max((prev[left]||0) + (prev[right]||0), dp[i][j])`
 *   is a roundabout way to write "sum of the two values above" — the
 *   `Math.max` with the pre-filled `1` only happens to be correct
 *   because every interior cell's sum is always >= 1; a plain
 *   `prev[left] + prev[right]` without the `Math.max`/`|| 0` fallback
 *   is simpler and more directly expresses Pascal's triangle's
 *   recurrence (every interior index of `prev` is guaranteed to
 *   exist for `j` in `[1, dp[i].length - 2]`).
 *
 * Areas of improvement:
 * - Remove the commented-out console.log.
 * - Simplify `dp[i][j] = prev[left] + prev[right]` directly, since
 *   `left`/`right` are always valid indices into `prev` for this loop
 *   range — the `Math.max`/`|| 0` defensive fallback isn't needed.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var generate = function (numRows) {
    const triangle = [[1]];

    for (let i = 1; i < numRows; i++) {
        const prev = triangle[i - 1];
        const row = [1];

        for (let j = 1; j < i; j++) {
            row.push(prev[j - 1] + prev[j]);
        }
        row.push(1);

        triangle.push(row);
    }

    return triangle;
};
*/
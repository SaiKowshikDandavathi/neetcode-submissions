/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {

    const results = Array.from({ length: m }, () => Array.from({ length: n }).fill(0));
    results[m - 1][n - 1] = 1;

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (results[i][j]) continue
            let rightPath = j + 1 >= n ? 0 : results[i][j + 1];
            let downPath = i + 1 >= m ? 0 : results[i + 1][j];
            results[i][j] = rightPath + downPath;
        }
    }
    return results[0][0]
}

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Time complexity O(m*n) is optimal for this DP problem, but space
 *   is also O(m*n) via the full 2D `results` grid — this problem
 *   only ever reads the current row and the row/column immediately
 *   below/right, so it's solvable in O(n) space with a rolling 1D
 *   array. That's a real, concrete improvement, not a nitpick.
 * - Base case handling is a bit indirect: it pre-seeds
 *   `results[m-1][n-1] = 1` and then relies on the `rightPath`/
 *   `downPath` ternaries treating out-of-bounds as 0, which works
 *   but is less obvious than initializing the last row/column to 1
 *   directly (since there's only one path along the edges).
 *
 * Areas of improvement:
 * - Reduce space to O(n) using a single rolling array instead of a
 *   full 2D grid.
 * - Make the base case (single path along the bottom row / right
 *   column) explicit rather than relying on out-of-bounds ternaries.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var uniquePaths = function (m, n) {
    let row = Array(n).fill(1);

    for (let i = 1; i < m; i++) {
        const newRow = Array(n).fill(1);
        for (let j = 1; j < n; j++) {
            newRow[j] = newRow[j - 1] + row[j];
        }
        row = newRow;
    }

    return row[n - 1];
};
*/

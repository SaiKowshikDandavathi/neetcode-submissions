/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const length1 = text1.length;
    const length2 = text2.length;
    let dp = Array.from({ length: length1 + 1 }, () => Array.from({ length: length2 + 1 }).fill(0));

    for (let i = 1; i <= length1; ++i) {
        for (let j = 1; j <= length2; ++j) {
            if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[length1][length2]

};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct, standard bottom-up 2D DP: O(length1 * length2) time,
 *   which is asymptotically optimal for LCS. However, it also uses
 *   O(length1 * length2) space, when only the previous DP row is ever
 *   needed to compute the next one — a rolling 1D array reduces space
 *   to O(min(length1, length2)) without changing the time complexity.
 * - `Array.from({ length: length1 + 1 }, () =>
 *   Array.from({ length: length2 + 1 }).fill(0))` is correct but
 *   slightly verbose; `Array.from({ length: length2 + 1 }, () => 0)`
 *   reads a bit more directly than a separate `.fill(0)` call.
 *
 * Areas of improvement:
 * - Collapse the 2D `dp` table to a 1D rolling array to cut space from
 *   O(n*m) to O(min(n, m)).
 * - Minor: simplify the array-of-zeros construction.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var longestCommonSubsequence = function (text1, text2) {
    // Rolling 1D DP: only the previous row is needed to compute the
    // current row. O(n*m) time, O(min(n, m)) space.
    if (text1.length < text2.length) [text1, text2] = [text2, text1];

    let prevRow = new Array(text2.length + 1).fill(0);

    for (let i = 1; i <= text1.length; i++) {
        const currentRow = new Array(text2.length + 1).fill(0);
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                currentRow[j] = 1 + prevRow[j - 1];
            } else {
                currentRow[j] = Math.max(prevRow[j], currentRow[j - 1]);
            }
        }
        prevRow = currentRow;
    }

    return prevRow[text2.length];
};
*/
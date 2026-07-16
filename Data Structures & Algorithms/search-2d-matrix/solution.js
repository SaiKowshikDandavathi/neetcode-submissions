class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;
        let left = 0;
        let right = (ROWS * COLS) - 1;
        while(left <= right){
            let mid = Math.floor((left + right)/2);
            let col = (mid % COLS);
            let row = Math.floor(mid/COLS);
            let midValue = matrix[row][col];
            if(midValue > target){
                right = mid - 1;
            } else if (midValue < target){
                left = mid + 1;
            } else {
                return true
            }
        } return false;
    }
}

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Already the optimal approach: treats the 2D matrix as a flattened
 *   sorted 1D array and binary searches over it directly, O(log(m*n))
 *   time, O(1) space — better than the row-then-column two-step
 *   binary search, and better than a naive row-scan.
 * - Assumes `matrix.length > 0` and `matrix[0].length > 0`, which
 *   holds under the problem's constraints; would throw on a
 *   genuinely empty matrix, but that's out of scope per constraints.
 *
 * Areas of improvement:
 * - None of substance for the given constraints; could add an
 *   explicit guard for a fully empty matrix if defensive coding is a
 *   priority.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;
        let left = 0;
        let right = ROWS * COLS - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const value = matrix[Math.floor(mid / COLS)][mid % COLS];

            if (value === target) return true;
            else if (value < target) left = mid + 1;
            else right = mid - 1;
        }

        return false;
    }
}
*/

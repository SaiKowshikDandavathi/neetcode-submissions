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

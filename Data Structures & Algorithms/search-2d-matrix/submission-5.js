class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length;
        let left = 0;
        let right = rows * cols - 1;

        while(left <= right){
            let mid = Math.floor((left + right)/2);
            let midRow = Math.floor(mid/cols);
            let midCol = mid % cols;
            let midValue = matrix[midRow][midCol]
            if(midValue ===  target) return true
            if(midValue > target) right = mid - 1
            else left = mid + 1
        }
        return false
    }

}

class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(const cur of matrix){
            if(target >= cur[0] && target <= cur[cur.length -1]){
                let left = 0;
                let right = cur.length - 1;
                while(left <= right){
                    let mid = Math.floor((right + left)/2);
                    if(cur[mid] > target){
                        right = mid - 1;
                    } else if (cur[mid] < target){
                        left = mid + 1;
                    } else {
                        return true
                    }
                }
            }
        } 
        return false
    }
}

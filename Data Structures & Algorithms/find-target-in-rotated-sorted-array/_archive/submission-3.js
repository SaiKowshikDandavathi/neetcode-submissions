class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let left = 0;
        let right = nums.length - 1;
        /**
         * [3,4,5,6,1,2] 4
         * left 0 right 5 mid 2
         *      3 > 1
         * left = 3, right = 5, mid 4
         */

        while(left <= right){
            let mid = Math.floor((left + right)/2);
            if(nums[mid] === target) return mid;

            if(nums[left] <= nums[mid]){
                if(nums[left] > target || nums[mid] < target){
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }

            } else {
                if(nums[mid] > target || nums[right] < target){
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        } return -1;
    }
}

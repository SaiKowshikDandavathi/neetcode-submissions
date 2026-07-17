class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (!nums || nums.length === 0) return -1;
        let l = 0,
            r = nums.length - 1;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if(nums[l] === target) return l
            if(nums[r] === target) return r
            if(nums[mid] === target) return mid
            if(nums[mid] >= nums[l]){
                if(nums[l] > target || nums[mid] < target){
                    l = mid + 1
                } else {
                    r = mid - 1
                }
            } else {
                if(nums[mid] > target || nums[r] < target){
                     r = mid - 1;
                } else {
                   l = mid + 1
                }
            }
        } return -1
        /**
         * [3,4,5,6,1,2], target = 1
         * l = 0, r = 5, mid = 2
         * l = 3, r = 5, mid = 4
         */
    }
}

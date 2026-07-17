class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if(!nums || nums.length === 0) return false;
        let l = 0, r = nums.length - 1;

        while(l < r){
            let mid = Math.floor((l+r)/2);
            
            if(nums[mid] < nums[r]){
                r = mid 
            } else {
                l = mid + 1
            }
        } 
        return nums[l]
    }
}

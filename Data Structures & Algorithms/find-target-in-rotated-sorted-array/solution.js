class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while(left <= right){
            let mid = Math.floor((left + right)/2);   
            if(nums[mid] === target) return mid;

            if(nums[left] <= nums[mid]){
                if(target > nums[mid] || target < nums[left]){
                    left = mid + 1;
                }
                else {
                    right = mid - 1;
                }
            } else {
                if(target < nums[mid] || target > nums[right]){
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }

            }     
        }
        return -1
    }
}

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Already the standard optimal O(log n) approach: determine which
 *   half [left, mid] or [mid, right] is sorted, then check if target
 *   lies in that sorted half to decide which way to move. Correctly
 *   handles a non-rotated array and a single-element array.
 *
 * Areas of improvement:
 * - The nested if/else branching (four decision points per
 *   iteration) is a bit dense; a comment stating the invariant
 *   ("one side of mid is always fully sorted") would make the intent
 *   clearer to a reader seeing this pattern for the first time.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) return mid;

            const leftSorted = nums[left] <= nums[mid];

            if (leftSorted) {
                if (target >= nums[left] && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (target > nums[mid] && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }

        return -1;
    }
}
*/

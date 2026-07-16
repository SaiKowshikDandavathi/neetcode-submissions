class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        while (left < right){
            let mid = Math.floor((left + right)/2);
            if(nums[mid] < nums[right]){
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return nums[left]
    }
}

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Already the optimal O(log n) binary search approach, comparing
 *   `nums[mid]` against `nums[right]` to decide which half contains
 *   the rotation point. Correctly handles an array with no rotation
 *   (fully sorted — loop still converges to index 0) and a
 *   single-element array (loop never runs, returns nums[0]).
 *
 * Areas of improvement:
 * - No explicit handling comment for why `right = mid` (not
 *   `mid - 1`) is safe here — a one-line comment would help a reader
 *   confirm `mid` is never eliminated incorrectly since it could
 *   itself be the minimum.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return nums[left];
    }
}
*/

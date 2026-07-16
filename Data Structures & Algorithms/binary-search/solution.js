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
            if (nums[mid] > target) right = mid - 1;
            else left = mid + 1;
        }
        return -1;
    }
}

/* ============================================================
 * REVIEW — Rating: 10/10
 *
 * Why this isn't perfect:
 * - Nothing substantive — this is a textbook, correct O(log n) binary
 *   search with O(1) space, using `left + (right-left)` style overflow
 *   safety isn't needed in JS but the mid computation is standard and
 *   correct. Handles empty array (loop never runs, returns -1) and
 *   single-element array correctly.
 *
 * Areas of improvement:
 * - Purely cosmetic: could use `left + Math.floor((right - left) / 2)`
 *   to guard against overflow in languages where it matters, though
 *   it's irrelevant in JS since numbers are doubles.
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
            if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }

        return -1;
    }
}
*/

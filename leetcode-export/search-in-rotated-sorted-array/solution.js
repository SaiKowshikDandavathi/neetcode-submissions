/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
- Use Binary Search
- 
 
 */

/**
  [4,5,6,7,0,1,2] target = 0

  left = 0
  right = 6
  mid = 3

  [0,1,2]
  mid = 1
  right = mid -1
 
 */
var search = function (nums, target) {

    let left = 0
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid
        }

        if (nums[left] <= nums[mid]) { // this tells us if the left portion is sorted
            if (target > nums[mid] || target < nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }

        } else {
            if (target < nums[mid] || target > nums[right]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }

        }
    }
    return -1


};

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Leftover scratch-work comments (the "Use Binary Search" note and the
 *   manual `[4,5,6,7,0,1,2]` trace) are working notes, not documentation —
 *   fine while solving, but should be cleaned out before this is presented
 *   as a finished submission.
 *
 * Areas of improvement:
 * - Delete the two scratch comment blocks above the function; keep only
 *   the JSDoc parameter block.
 * - Algorithm itself is already optimal: O(log n) time, O(1) space,
 *   correctly determines which half is sorted via `nums[left] <= nums[mid]`
 *   and narrows the search range accordingly (no duplicates in this
 *   variant, so no O(n) degradation needed).
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;

        if (nums[left] <= nums[mid]) {
            // Left half is sorted.
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right half is sorted.
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};
*/
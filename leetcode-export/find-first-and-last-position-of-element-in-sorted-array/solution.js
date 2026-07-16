/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  [5,7,7,8,8,10]

//  left = 0 -->5 , 3
//  right = 5 --> 10, 5
//  mid = 2 --> 7, 4, 5

//  idx = 5


var searchRange = function (nums, target) {
    const binarySearch = (nums, target, searchingRight) => {
        let left = 0
        let right = nums.length - 1
        let idx = -1

        // Binary Search

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)

            if (nums[mid] > target) {
                right = mid - 1
            } else if (nums[mid] < target) {
                left = mid + 1
            } else {
                idx = mid
                if (searchingRight) {
                    left = mid + 1
                } else {
                    right = mid - 1
                }
            }

        } return idx
    }

    const left = binarySearch(nums, target, false)
    const right = binarySearch(nums, target, true)

    return [left, right]

};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Lines 7-13 are leftover scratch-pad tracing notes for a
 *   specific test case ([5,7,7,8,8,10]) — useful while developing,
 *   but dead clutter that should have been deleted before this was
 *   considered a finished submission.
 * - Algorithm itself is correct and optimal: two binary searches
 *   (leftmost and rightmost bound) each O(log n), O(1) space,
 *   which is the standard, best-known approach for this problem.
 *   Correctly returns `[-1, -1]` when the target isn't found, since
 *   `idx` stays `-1` in both searches.
 *
 * Areas of improvement:
 * - Delete the scratch trace comments at the top of the file.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var searchRange = function (nums, target) {
    const findBound = (searchingRight) => {
        let left = 0;
        let right = nums.length - 1;
        let bound = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                bound = mid;
                if (searchingRight) left = mid + 1;
                else right = mid - 1;
            }
        }

        return bound;
    };

    return [findBound(false), findBound(true)];
};
*/
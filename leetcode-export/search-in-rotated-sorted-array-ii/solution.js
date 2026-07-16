/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return true;
        }

        // Handle duplicates
        if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
            left++;
            right--;
        } else if (nums[left] <= nums[mid]) {
            // Left half is sorted
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right half is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false;
};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - No functional issues — correctly handles the duplicate case that
 *   breaks the simple "which half is sorted" test (`nums[left] === nums[mid]
 *   && nums[mid] === nums[right]`) by shrinking both ends, which is the
 *   standard fix for this variant.
 *
 * Areas of improvement:
 * - None of substance. Worth noting for an interview: worst-case time is
 *   O(n) (e.g. all-equal array like [1,1,1,1,1] with target not present),
 *   which is an unavoidable, well-known degradation from the O(log n) of
 *   the no-duplicates version — good to be able to say so explicitly if
 *   asked.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return true;

        if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
            left++;
            right--;
        } else if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false;
};
*/
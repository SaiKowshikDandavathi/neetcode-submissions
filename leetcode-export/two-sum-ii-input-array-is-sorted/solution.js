/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    let left = 0;
    let right = numbers.length - 1;
    let curSum;

    while (left < right){
        curSum = numbers[left] + numbers[right];

        if(curSum > target){
            right--;
        } else if (curSum < target){
            left++
        } else {
            return [left + 1, right + 1]
        }
    }

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Classic two-pointer approach exploiting the sorted input — O(n)
 *   time, O(1) space, which is optimal (better than the O(n) extra
 *   space hashmap approach and the recursive O(n) stack version also
 *   seen in this problem's history). Correctly converts to 1-indexed
 *   output with `left + 1, right + 1`.
 * - No explicit `return` after the `while` loop; if no pair is found
 *   the function implicitly returns `undefined` rather than `null`
 *   or `[]`. Harmless under LeetCode's guarantee that exactly one
 *   solution exists, but not defensive.
 *
 * Areas of improvement:
 * - Add a trailing `return [];` (or similar) after the loop for
 *   explicitness, even though it's unreachable under the problem's
 *   guarantees.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }

    return [];
};
*/
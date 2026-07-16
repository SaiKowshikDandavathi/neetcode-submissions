class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while(left < right){
            const sum = numbers[left] + numbers[right];
            if(sum === target) return [left + 1, right + 1];
            if(sum > target) right--;
            else left++;
        }
        return []
    }
}

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - This is the correct, optimal two-pointer approach for a SORTED array —
 *   O(n) time, O(1) extra space, better than the O(n) space hash-map
 *   approach used for the unsorted variant of this problem.
 * - Handles the "no solution" case by returning `[]`, consistent and safe.
 *
 * Areas of improvement:
 * - Very minor: no explicit guard for `numbers.length < 2`, though the
 *   while loop condition (`left < right`) already makes this a no-op and
 *   correctly falls through to `return []`, so it's not a real bug.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const sum = numbers[left] + numbers[right];
            if (sum === target) return [left + 1, right + 1];
            if (sum > target) right--;
            else left++;
        }
        return [];
    }
}
*/

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if(heights.length === 0) return 0;
        let maxArea = 0;
        let left = 0;
        let right = heights.length - 1;

        while(left < right){
            let length = Math.min(heights[left], heights[right]);
            let breadth = right -left;
            let curArea = length * breadth;
            maxArea = Math.max(curArea,maxArea);
            if(heights[left] > heights[right]) right--;
            else left++;
        }
        return maxArea;
    }
}

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Already the optimal two-pointer approach: O(n) time, O(1) space.
 *   Moving the pointer at the shorter line is the correct greedy
 *   choice (moving the taller one can only shrink or keep area equal
 *   since width always decreases and height is capped by the min).
 *   The `heights.length === 0` guard handles the empty-array edge
 *   case explicitly, and two elements works correctly too.
 *
 * Areas of improvement:
 * - `heights.length === 0` guard is technically redundant — the while
 *   loop condition `left < right` already evaluates false immediately
 *   for arrays of length 0 or 1, returning `maxArea` (0) anyway.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;

        while (left < right) {
            const height = Math.min(heights[left], heights[right]);
            maxArea = Math.max(maxArea, height * (right - left));
            if (heights[left] < heights[right]) left++;
            else right--;
        }

        return maxArea;
    }
}
*/

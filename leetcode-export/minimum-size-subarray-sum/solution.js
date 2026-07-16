/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let min = nums.length + 1;
    let total = 0;
    for (let start = 0, end = 0; end < nums.length; end++) {
        let currentElement = nums[end]
        total += currentElement;

        while (total >= target) {
            min = Math.min(min, end - start + 1)
            let ele = nums[start]
            total -= ele
            start++
        }

    } return min === nums.length + 1 ? 0 : min
};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - This is the optimal sliding-window approach: O(n) time, O(1)
 *   space. The `min = nums.length + 1` sentinel correctly signals "no
 *   valid window found" and is converted to 0 at the end, matching
 *   the problem's contract.
 * - Minor nit: `currentElement` and `ele` are single-use aliases for
 *   `nums[end]`/`nums[start]` that add a line each without adding
 *   clarity — could be inlined.
 *
 * Areas of improvement:
 * - Inline `nums[end]`/`nums[start]` directly instead of the
 *   intermediate `currentElement`/`ele` variables.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var minSubArrayLen = function (target, nums) {
    let minLen = Infinity;
    let windowSum = 0;
    let start = 0;

    for (let end = 0; end < nums.length; end++) {
        windowSum += nums[end];

        while (windowSum >= target) {
            minLen = Math.min(minLen, end - start + 1);
            windowSum -= nums[start];
            start++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
};
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let setValues = new Set(nums)
    let missedValue;
    for (let i = 0; i <= nums.length; i++){
        if(!setValues.has(i)){
            missedValue = i
            break;
        }
    } return missedValue
};

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - Correct, but uses a `Set` built from `nums` (O(n) extra space)
 *   plus a scan up to `nums.length` to find the missing value — O(n)
 *   time is fine, but the O(n) space is unnecessary. This problem has
 *   a well-known O(1) extra space solution via the Gauss sum formula
 *   (`n*(n+1)/2 - actualSum`) or XOR-ing indices with values, which
 *   is what interviewers are typically probing for as a follow-up.
 *
 * Areas of improvement:
 * - Replace the `Set` with the arithmetic-sum trick or XOR trick to
 *   get O(1) extra space while keeping O(n) time.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var missingNumber = function (nums) {
    const n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (const num of nums) {
        actualSum += num;
    }

    return expectedSum - actualSum;
};
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let setVals = new Set(nums);
    let maxLength = nums.length + 1;
    let missingValues = []

    for (let i = 1; i < maxLength; i++) {
        if (!setVals.has(i)) {
            missingValues.push(i)
        }
    } return missingValues

};

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Correct: O(n) time, and handles duplicates fine since it only
 *   checks set membership, not counts.
 * - Uses a `Set` for O(n) *extra* space. LeetCode's follow-up for
 *   this problem specifically asks for an O(1)-extra-space
 *   solution (not counting the output array), achieved by using
 *   the input array itself as a hash table — negate the value at
 *   index `nums[i] - 1` to mark that `nums[i]` was seen, then scan
 *   for indices whose value is still positive.
 *
 * Areas of improvement:
 * - Implement the in-place negation-marking trick to satisfy the
 *   O(1) extra space follow-up.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var findDisappearedNumbers = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        const idx = Math.abs(nums[i]) - 1;
        if (nums[idx] > 0) nums[idx] = -nums[idx];
    }

    const missing = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) missing.push(i + 1);
    }

    return missing;
};
*/
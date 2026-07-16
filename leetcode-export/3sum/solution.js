/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let j = i + 1
        let k = nums.length - 1
        while (j < k) {
            let total = nums[i] + nums[j] + nums[k]
            if (total > 0) {
                k--
            } else if (total < 0) {
                j++
            } else {
                res.push([nums[i], nums[j], nums[k]])
                j++
                while (nums[j] === nums[j - 1] && j < k) {
                    j++
                }
            }
        }

    } return res

};
/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - This is the standard sort + two-pointer approach — O(n^2) time, O(1)
 *   extra space (ignoring the output and the sort's internal space), which
 *   is the accepted optimal approach for 3Sum.
 * - Correctly skips duplicate `i` values and duplicate `j` values after a
 *   match to avoid duplicate triplets; correctly handles negative numbers
 *   since it sorts first.
 * - No console.log or dead code in this submission, unlike its siblings.
 *
 * Areas of improvement:
 * - Minor: doesn't skip duplicate `k` from the right side symmetrically
 *   (only advances `j` past duplicates) — this doesn't cause incorrect
 *   output because the `j < k` boundary and the `j` dedup already prevent
 *   duplicate triplets, but a symmetric `k` dedup is the more commonly
 *   taught, more obviously-correct version.
 * - No early exit when `nums[i] > 0` (since array is sorted, once the
 *   smallest element in a triplet is positive no zero-sum triplet is
 *   possible) — a small constant-factor optimization that's missing.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break; // smallest can't start a zero-sum triplet
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const total = nums[i] + nums[j] + nums[k];
            if (total > 0) {
                k--;
            } else if (total < 0) {
                j++;
            } else {
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) j++;
                while (j < k && nums[k] === nums[k + 1]) k--;
            }
        }
    }
    return res;
};
*/

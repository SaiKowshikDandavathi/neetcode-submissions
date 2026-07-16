/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const map = new Map();
    let count = 0;
    let sum = 0;
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const diff = sum - k;
        if(map.has(diff)){
            count += map.get(diff);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - This is the optimal prefix-sum + hashmap approach: O(n) time,
 *   O(n) space. `map.set(0, 1)` correctly seeds the case where a
 *   prefix sum itself equals k (subarray starting at index 0), and
 *   the frequency-count Map correctly handles negative numbers and
 *   duplicate prefix sums (unlike a naive Set-based version would).
 * - Missing semicolon after `return count` is a tiny style
 *   inconsistency versus the rest of the file's semicolon usage.
 *
 * Areas of improvement:
 * - Add the missing trailing semicolon for consistency.
 * - Could rename `map`/`diff` to `prefixCounts`/`target` for a touch
 *   more self-documentation, but current names are already clear.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var subarraySum = function (nums, k) {
    const prefixCounts = new Map();
    prefixCounts.set(0, 1);

    let sum = 0;
    let count = 0;

    for (const num of nums) {
        sum += num;
        const needed = sum - k;
        count += prefixCounts.get(needed) || 0;
        prefixCounts.set(sum, (prefixCounts.get(sum) || 0) + 1);
    }

    return count;
};
*/
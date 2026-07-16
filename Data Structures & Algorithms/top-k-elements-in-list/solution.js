class Solution {
    topKFrequent(nums, k) {
        const freq = new Map();
        for (const num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        // Bucket sort by frequency: index = frequency, value = list of nums
        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        for (const [num, count] of freq) {
            buckets[count].push(num);
        }

        const res = [];
        for (let count = buckets.length - 1; count >= 0 && res.length < k; count--) {
            console.log(buckets[count])
            for (const num of buckets[count]) {
                res.push(num);
                if (res.length === k) break;
            }
        }
        return res;
    }
}

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect (this round replaces the previous winner —
 * see _archive/solution-previous.js for the earlier 6/10 sort-based
 * solution this superseded):
 * - Algorithmically this is now optimal: bucket sort by frequency is
 *   O(n) time and O(n) space, better than the previous winner's
 *   O(n log n) full sort. Frequencies are bounded by `nums.length`, so
 *   a fixed-size bucket array indexed by count avoids any comparison
 *   sort entirely. Correctly handles all elements sharing one
 *   frequency, k equal to the number of distinct elements, and ties
 *   within a bucket (order among tied elements is unspecified by the
 *   problem, so insertion order is fine).
 * - `console.log(buckets[count])` on line 17 is a leftover debug
 *   statement — it doesn't affect correctness but has no place in
 *   committed code and will spam stdout on every call.
 * - Missing JSDoc param/return annotations that sibling solutions in
 *   this repo consistently include.
 *
 * Areas of improvement:
 * - Remove the console.log.
 * - Add `@param`/`@return` JSDoc comments for consistency with the
 *   rest of the repo.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    // @param {number[]} nums, @param {number} k, @return {number[]}
    topKFrequent(nums, k) {
        const freq = new Map();
        for (const num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        // Bucket sort by frequency: index = frequency, value = list of nums
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, count] of freq) {
            buckets[count].push(num);
        }

        const res = [];
        for (let count = buckets.length - 1; count >= 0 && res.length < k; count--) {
            for (const num of buckets[count]) {
                res.push(num);
                if (res.length === k) break;
            }
        }
        return res;
    }
}
*/

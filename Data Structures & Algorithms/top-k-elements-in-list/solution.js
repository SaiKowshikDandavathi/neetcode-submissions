class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (const num of nums){
            const value = map.get(num) || 0;
            map.set(num, value + 1);
        }
        const res = [...map].sort((a,b) => b[1]- a[1]).map(e => e[0]);
        return res.slice(0,k);
             
    }
}

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - Sorts the ENTIRE frequency map with `.sort((a,b) => b[1]-a[1])`, which is
 *   O(n log n). This is the classic "top-k" problem, and it has a well-known
 *   O(n log k) (heap) or O(n) (bucket-sort by frequency) solution — sorting
 *   everything just to take the first k is asymptotically wasteful.
 * - `res.slice(0, k)` after a full sort means work is done for elements far
 *   outside the top-k that is then thrown away.
 *
 * Areas of improvement:
 * - Use bucket sort: create `buckets[frequency] = [nums...]`, sized
 *   `nums.length + 1`, then walk from the highest frequency down until k
 *   numbers are collected — O(n) time, O(n) space.
 * - Alternatively use a min-heap of size k for O(n log k).
 * - No edge-case handling shown for k > number of distinct elements (works
 *   fine here since slice just returns what's available, but worth a comment).
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
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
            for (const num of buckets[count]) {
                res.push(num);
                if (res.length === k) break;
            }
        }
        return res;
    }
}
*/

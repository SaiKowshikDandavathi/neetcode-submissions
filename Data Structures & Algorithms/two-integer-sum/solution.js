class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        for (let i = 0; i < nums.length; i++){
            const diff = target - nums[i];
            if(map.has(diff)){
                return [map.get(diff), i]
            }
            map.set(nums[i], i)
        }
        return []
    }
}

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Solid, idiomatic one-pass hash map solution — O(n) time, O(n) space,
 *   which is the optimal known approach for this problem.
 * - The explicit `return []` fallback at the end is technically unreachable
 *   given LeetCode's guarantee of exactly one solution, but it's a
 *   defensive habit that avoids returning `undefined` — a plus for
 *   readability over the sibling submissions that omitted it.
 *
 * Areas of improvement:
 * - Minor: could destructure `map.get(diff)` return value name for extra
 *   clarity (e.g. `firstIndex`), but this is a nitpick — the code is clean
 *   and correctly named already.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    twoSum(nums, target) {
        const seen = new Map(); // value -> index

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (seen.has(complement)) {
                return [seen.get(complement), i];
            }
            seen.set(nums[i], i);
        }
        return [];
    }
}
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];


        function makeCombinations(index,comb){
            if(index >= nums.length){
                res.push([...comb])
                return;
            }
            comb.push(nums[index]);
            makeCombinations(index + 1, comb);
            comb.pop();
            makeCombinations(index + 1, comb);
        }
        makeCombinations(0,[]);
        return res
    }
}

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Already the optimal include/exclude backtracking approach:
 *   O(2^n) time (one leaf per subset, matching the total number of
 *   subsets), O(n) recursion depth. `[...comb]` correctly snapshots
 *   the current combination before pushing so later `pop()` calls
 *   don't mutate already-stored results.
 *
 * Areas of improvement:
 * - Minor style nit: the two recursive calls (`comb.push` then
 *   include-call, `comb.pop()` then exclude-call) rely on shared
 *   mutable state and call order — a brief comment noting "include
 *   nums[index]" / "exclude nums[index]" above each branch would
 *   make the backtracking structure easier to scan.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    subsets(nums) {
        const res = [];

        function backtrack(index, comb) {
            if (index === nums.length) {
                res.push([...comb]);
                return;
            }
            // include nums[index]
            comb.push(nums[index]);
            backtrack(index + 1, comb);
            comb.pop();
            // exclude nums[index]
            backtrack(index + 1, comb);
        }

        backtrack(0, []);
        return res;
    }
}
*/

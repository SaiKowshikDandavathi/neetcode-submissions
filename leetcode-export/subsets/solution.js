/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

    let res = [];
    let subset = []

    function createSubSet(i) {
        if (i === nums.length) {
            res.push([...subset])
            return
        }
        subset.push(nums[i])
        createSubSet(i + 1)
        subset.pop()
        createSubSet(i + 1)
    }

    createSubSet(0)
    return res

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - This is the standard include/exclude backtracking approach and
 *   is asymptotically optimal: O(2^n) time and O(n) recursion depth,
 *   matching the required output size of 2^n subsets. The push/pop
 *   backtracking on `subset` correctly avoids extra array copies
 *   except at the leaves (`[...subset]`), which is necessary since
 *   each result needs to be an independent array.
 * - Function name `createSubSet` is singular/misleading since it
 *   actually builds all subsets via recursion, not just one.
 *
 * Areas of improvement:
 * - Rename `createSubSet` to something like `backtrack` or
 *   `buildSubsets` to better reflect what the helper does.
 * - Could add a base early-return for `nums.length === 0` (though
 *   the current code already handles it correctly by pushing `[]`).
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var subsets = function (nums) {
    const result = [];
    const current = [];

    function backtrack(index) {
        if (index === nums.length) {
            result.push([...current]);
            return;
        }
        current.push(nums[index]);
        backtrack(index + 1);
        current.pop();
        backtrack(index + 1);
    }

    backtrack(0);
    return result;
};
*/
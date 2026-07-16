/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let res = []
    let subset = []
    nums.sort()

    function createSubSet(subset, i) {
        if (i >= nums.length) {
            res.push([...subset])
            return
        }

        createSubSet([...subset, nums[i]], i + 1)

        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++
        }

        createSubSet([...subset], i + 1)
    }

    createSubSet(subset, 0)
    return res

};

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - `nums.sort()` on line 8 has no comparator, so it sorts by
 *   default lexicographic (string) order, not numeric order. Given
 *   the LeetCode constraint that nums can include negative numbers
 *   and multi-digit values (-10 to 10), e.g. nums = [10, 2] sorts to
 *   [10, 2] instead of [2, 10], and nums = [-1, -10] sorts wrong too.
 *   Duplicates still end up adjacent (sort is stable, so the
 *   adjacent-duplicate-skip logic on line 18 still functions), but
 *   the elements *within* each returned subset are no longer in
 *   ascending numeric order, which can fail judges that expect
 *   canonical sorted subsets.
 * - `createSubSet([...subset, nums[i]], i + 1)` spreads a new array
 *   on every recursive call instead of push/pop backtracking, adding
 *   unnecessary O(n) copy overhead per call; the overall algorithm is
 *   still O(2^n) but with worse constants than an in-place
 *   push/pop version.
 * - Dead commented-out `console.log` line was removed above; the
 *   remaining logic is otherwise sound (correct skip-duplicates-at-
 *   same-recursion-level pattern).
 *
 * Areas of improvement:
 * - Fix the sort to `nums.sort((a, b) => a - b)`.
 * - Switch to push/pop backtracking on a shared `subset` array
 *   instead of spreading a new array at every call, to cut down on
 *   allocations.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    const subset = [];

    function backtrack(index) {
        result.push([...subset]);
        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] === nums[i - 1]) continue;
            subset.push(nums[i]);
            backtrack(i + 1);
            subset.pop();
        }
    }

    backtrack(0);
    return result;
};
*/




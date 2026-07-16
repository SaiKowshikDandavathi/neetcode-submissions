/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    const memo1 = Array.from({ length: nums.length }).fill(0);
    const memo2 = new Array(nums.length).fill(0);

    memo1[0] = nums[0];
    memo2[1] = nums[1];

    const memo1Max = calculateAmount(nums, memo1, 1, nums.length - 1);
    const memo2Max = calculateAmount(nums, memo2, 2, nums.length);

    return Math.max(memo1Max, memo2Max);

};

function calculateAmount(inputArr, memo, startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
        let cur = inputArr[i];
        let prev = i - 2 > -1 ? memo[i - 2] : 0;
        memo[i] = Math.max(cur + prev, memo[i - 1])
    }
    return Math.max(...memo)
}

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Correctly reduces the circular problem to two linear house-robber
 *   passes (excluding the last house, then excluding the first), but
 *   each pass allocates a full O(n)-length `memo` array when only the
 *   previous two values are ever needed — O(1) space per pass is
 *   achievable (the linear house-robber problem's classic
 *   optimization), so this uses O(n) space where O(1) suffices.
 * - `memo1` is sized `nums.length` but only indices `0..length-2` are
 *   ever written (the last slot is intentionally excluded) — that's
 *   fine functionally, but the unused trailing slot is easy to
 *   misread as a bug on first glance.
 * - `calculateAmount` takes `Math.max(...memo)` over the whole array
 *   rather than just returning the last computed value
 *   (`memo[endIndex - 1]`), which does more work than needed and
 *   depends on all untouched slots being 0 to not skew the max.
 *
 * Areas of improvement:
 * - Extract a helper that runs the classic O(1)-space linear
 *   house-robber recurrence over a sub-range, called twice (once per
 *   circular split), instead of allocating two O(n) memo arrays.
 * - Return `memo[endIndex - 1]` directly instead of `Math.max(...memo)`
 *   once the loop invariant guarantees it holds the running best.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var rob = function (nums) {
    if (nums.length === 1) return nums[0];

    // Circular arrangement: the first and last house can't both be
    // robbed, so the answer is the better of robbing the linear range
    // [0, n-2] or [1, n-1]. Each linear pass uses O(1) space.
    const robLinear = (start, end) => {
        let prev2 = 0;
        let prev1 = 0;
        for (let i = start; i < end; i++) {
            const takeCurrent = nums[i] + prev2;
            [prev2, prev1] = [prev1, Math.max(takeCurrent, prev1)];
        }
        return prev1;
    };

    return Math.max(
        robLinear(0, nums.length - 1),
        robLinear(1, nums.length)
    );
};
*/
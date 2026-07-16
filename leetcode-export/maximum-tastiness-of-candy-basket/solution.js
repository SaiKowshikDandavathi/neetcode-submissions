/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function (price, k) {

    const sortedArray = price.sort((a, b) => a - b)

    let left = 0, ans = left, right = 10 ** 9

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let lastPrice = sortedArray[0]
        let countOfCandies = 1

        for (let i = 1; i < sortedArray.length; i++) {
            if (sortedArray[i] - lastPrice >= mid) {
                countOfCandies++
                lastPrice = sortedArray[i]
            }
        }

        if (countOfCandies >= k) {
            ans = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    } return ans
};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - This is the correct "binary search on the answer" approach:
 *   O(n log(maxPrice)) time, O(1) extra space (ignoring the sort) —
 *   optimal for this problem.
 * - Minor nit: `price.sort(...)` sorts the input array in place and
 *   reassigns the same reference to `sortedArray`, silently mutating
 *   the caller's array. Not a bug for LeetCode's harness, but mutating
 *   an input parameter is a smell in real production code.
 *
 * Areas of improvement:
 * - Use `[...price].sort(...)` (or `price.slice().sort(...)`) to avoid
 *   mutating the caller's array.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var maximumTastiness = function (price, k) {
    const sorted = [...price].sort((a, b) => a - b);

    const canPick = (minDiff) => {
        let count = 1;
        let lastPrice = sorted[0];
        for (let i = 1; i < sorted.length; i++) {
            if (sorted[i] - lastPrice >= minDiff) {
                count++;
                lastPrice = sorted[i];
            }
        }
        return count >= k;
    };

    let left = 0, right = sorted[sorted.length - 1] - sorted[0], ans = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (canPick(mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
};
*/
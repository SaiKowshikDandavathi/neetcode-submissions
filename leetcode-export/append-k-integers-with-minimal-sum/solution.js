/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSum = function (nums, k) {
    let sum = (k * (k + 1)) / 2
    nums = Array.from(new Set(nums))
    nums.sort((a, b) => a - b)

    for (let curValue of nums) {
        if (curValue <= k) {
            k++
            sum = sum - curValue + k
            // console.log(sum)
        }
        else break
    }
    return sum

};

/**
    nums = [5,6]
    k = 6
    sum = 21
    Loop 1
        sum = 21 - 5 + 7 = 23
    Loop 2
        sum = 23 - 6 + 8 = 25

    [1,4,25,10,25] k = 2




 */
/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Correct greedy approach: start from the sum of `1..k`, then for every
 *   duplicate/colliding existing value `<= k`, "shift" it out to the next
 *   available integer above the current window. O(n log n) from the sort,
 *   which is fine (dominates over the O(n) scan).
 * - Uses `for...of` (good) but the file still contains a large leftover
 *   scratch-work comment block below the function (manual trace of an
 *   example) — useful during development but unprofessional to leave in
 *   for an interview-ready file, and includes an unfinished/unexplained
 *   trace (`[1,4,25,10,25] k = 2`) with no conclusion.
 * - Variable name `sum` is reused as both the running total and the return
 *   value with no intermediate naming, which is fine here but a `result`
 *   name would read slightly clearer.
 *
 * Areas of improvement:
 * - Delete the scratch-work comment block once the solution is verified.
 * - Add a one-line comment explaining the core insight: the k smallest
 *   positive integers not already in `nums` sum to `k(k+1)/2` plus a
 *   correction for every value in `nums` that falls inside `[1, k]`,
 *   since that value "pushes" the window in a shifted manner.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var minimalKSum = function (nums, k) {
    const unique = [...new Set(nums)].sort((a, b) => a - b);
    let sum = (k * (k + 1)) / 2;

    for (const value of unique) {
        if (value > k) break;
        k++;
        sum += k - value;
    }
    return sum;
};
*/

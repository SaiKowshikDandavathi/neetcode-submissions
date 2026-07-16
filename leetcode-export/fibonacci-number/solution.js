/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n === 0) return 0
    if (n <= 2) return 1
    return fib(n-1)+ fib(n-2)
};

/* ============================================================
 * REVIEW — Rating: 4/10
 *
 * Why this isn't perfect:
 * - Naive double recursion with no memoization: each call to
 *   `fib(n)` branches into two more calls, giving O(2^n) time
 *   complexity. This is exponential and dramatically suboptimal —
 *   the well-known DP/iterative solution is O(n) time, O(1) space.
 *   For even moderately large `n` (LeetCode's constraint allows up
 *   to n=30, which is fine, but the pattern itself doesn't scale)
 *   this approach would time out on larger inputs.
 * - Correct base cases: `n === 0` returns 0, `n <= 2` (covers
 *   n === 1 and n === 2) returns 1, matching the Fibonacci
 *   definition where F(1) = F(2) = 1.
 *
 * Areas of improvement:
 * - Replace with an iterative bottom-up computation (or
 *   memoized recursion) to bring time complexity down to O(n) and
 *   space down to O(1).
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var fib = function (n) {
    if (n === 0) return 0;

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        [prev, curr] = [curr, prev + curr];
    }

    return curr;
};
*/
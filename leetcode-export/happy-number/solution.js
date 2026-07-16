/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    if(n < 10){
        if(n === 1 || n === 7) return true
        else return false
    }

    let total = 0;

    while (n > 0){
        let remainder = n % 10;
        total += remainder ** 2;
        n = n - remainder;
        n = n/10;
    }

    if(total === 1) return true

    return isHappy(total)


};

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - Relies on a memorized fact ("single-digit results other than 1 and
 *   7 are always unhappy") instead of general cycle detection. It's
 *   correct given the problem's guarantee that every input eventually
 *   reaches a single digit, but it doesn't demonstrate (or even
 *   require) recognizing the actual pattern being tested — cycle
 *   detection via a visited-set or Floyd's algorithm. If an
 *   interviewer tweaks the problem (e.g. base other than 10), this
 *   solution breaks entirely since it hardcodes base-10 single-digit
 *   outcomes.
 * - Recursion means no explicit bound on call depth is visible in the
 *   code; it happens to be shallow in practice, but nothing in the
 *   code documents why it's guaranteed to terminate.
 *
 * Areas of improvement:
 * - Replace the magic-number shortcut with a `Set` that tracks seen
 *   totals; if a total repeats before reaching 1, return false. This
 *   is the pattern the problem is actually designed to test.
 * - Convert to an iterative loop to make the termination condition
 *   (cycle detected) explicit rather than implicit in a recursive
 *   base case.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var isHappy = function (n) {
    // Track sums we've already seen; if one repeats, we're in a cycle
    // that isn't 1, so n is not happy. O(log n) per iteration digit
    // work, bounded number of iterations before a cycle is detected.
    const seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        let sum = 0;
        while (n > 0) {
            const digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);
        }
        n = sum;
    }

    return n === 1;
};
*/
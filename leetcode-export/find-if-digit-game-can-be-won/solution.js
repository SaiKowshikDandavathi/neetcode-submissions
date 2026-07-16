/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canAliceWin = (nums) => {

    let singeDigitSum = 0
    let doubleDigitSum = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 10) {
            singeDigitSum += nums[i]
        } else {
            doubleDigitSum += nums[i]
        }
    }
    return singeDigitSum != doubleDigitSum

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Correct and already optimal: single pass, O(n) time, O(1)
 *   space. Using `nums[i] < 10` for the single-vs-double-digit
 *   check is more efficient than a `toString().length` conversion
 *   (avoids allocating a string per element), which is a genuine
 *   improvement over other attempts at this problem.
 * - Only real nit is a typo in the variable name `singeDigitSum`
 *   (missing an "l" — should be `singleDigitSum`), and `!=` is used
 *   instead of the stricter `!==` (no functional difference since
 *   both operands are numbers).
 *
 * Areas of improvement:
 * - Fix the `singeDigitSum` -> `singleDigitSum` typo.
 * - Use `!==` for consistency with strict-equality style.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
const canAliceWin = (nums) => {
    let singleDigitSum = 0;
    let doubleDigitSum = 0;

    for (const num of nums) {
        if (num < 10) singleDigitSum += num;
        else doubleDigitSum += num;
    }

    return singleDigitSum !== doubleDigitSum;
};
*/
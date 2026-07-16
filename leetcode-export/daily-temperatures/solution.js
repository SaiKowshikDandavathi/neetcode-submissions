/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {

    let stack = []
    let result = new Array(temperatures.length).fill(0);

    for (let i = temperatures.length - 1; i >= 0; --i) {

        while (stack.length && temperatures[i] >= temperatures[stack[0]]) {
            stack.shift()
        }

        if (stack.length === 0) result[i] = 0
        else result[i] = stack[0] - i;

        stack.unshift(i)
        // console.log(i, stack, result)

    }

    return result;

};

/* ============================================================
 * REVIEW — Rating: 5/10
 *
 * Why this isn't perfect:
 * - This is the classic monotonic-stack pattern, but it uses
 *   `stack.shift()` / `stack.unshift(i)` to treat the *front* of a
 *   plain JS array as the top of the stack. Both operations are
 *   O(n) because the engine has to re-index every remaining
 *   element, so the algorithm degrades to O(n^2) in the worst case
 *   (e.g. strictly decreasing temperatures) instead of the optimal
 *   O(n) that this pattern is supposed to achieve with push/pop
 *   at the array's end.
 * - Leftover commented-out `// console.log(i, stack, result)` is
 *   dead code.
 * - Logic itself is correct: iterating right-to-left, popping
 *   indices whose temperature is <= the current one, then reading
 *   the next-warmer index off the top of the stack.
 *
 * Areas of improvement:
 * - Use `stack.push(i)` / `stack.pop()` on the end of the array
 *   instead of `unshift`/`shift` to get true O(1) amortized stack
 *   operations and restore O(n) overall time.
 * - Remove the dead console.log comment.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var dailyTemperatures = function (temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = []; // indices with a temperature we haven't beaten yet

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }

    return result;
};
*/
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let stack = [];
    let num = '';
    let sign = null

    for (let i = 0; i <= s.length; i++) {
        let cur = s[i];
        if (cur === " ") continue
        if (!isNaN(cur)) num += cur;
        if (isNaN(cur)) {
            num = Number(num)
            switch (sign) {
                case '+':
                case null:
                    stack.push(num)
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                case '/':
                    stack.push(parseInt(stack.pop() / num, 10));
                    break;
            }
            sign = cur;
            num = '';
        }
    }

    return stack.reduce((acc, cur) => {
        return acc + cur
    }, 0)
};
/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct standard stack-based calculator: O(n) time, O(n) space for the
 *   stack. Handles multi-digit numbers (`num` accumulates digits),
 *   whitespace, and operator precedence (`*`/`/` immediately combine with
 *   the top of stack; `+`/`-` just push a signed value) correctly.
 * - `case '/': stack.push(parseInt(stack.pop() / num, 10))` truncates
 *   toward zero via `parseInt`, which is correct for LeetCode's
 *   "truncate toward zero" division rule — but relying on `parseInt` for
 *   this is a bit indirect; `Math.trunc` states the intent more clearly.
 * - Looping to `i <= s.length` and reading `s[i]` as `undefined` on the
 *   final iteration works because `isNaN(undefined)` is `true`, but this
 *   is a subtle/implicit trick rather than an explicit end-of-string check.
 *
 * Areas of improvement:
 * - Swap `parseInt(x, 10)` for `Math.trunc(x)` to make the truncation
 *   intent explicit rather than relying on a string-parsing function for
 *   numeric truncation.
 * - Could avoid the full array-based stack and instead keep only a running
 *   total and last pushed value, for O(1) extra space instead of O(n) — a
 *   nice-to-have, not required for correctness.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var calculate = function (s) {
    let stack = [];
    let num = 0;
    let sign = '+';

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (/\d/.test(c)) {
            num = num * 10 + Number(c);
        }
        if ((!/\s/.test(c) && !/\d/.test(c)) || i === s.length - 1) {
            if (sign === '+') stack.push(num);
            else if (sign === '-') stack.push(-num);
            else if (sign === '*') stack.push(stack.pop() * num);
            else if (sign === '/') stack.push(Math.trunc(stack.pop() / num));
            sign = c;
            num = 0;
        }
    }

    return stack.reduce((acc, cur) => acc + cur, 0);
};
*/

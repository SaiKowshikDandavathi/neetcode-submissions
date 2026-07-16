class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        let value;
        let firstValue;
        let secondValue;

        for (const token of tokens){
            console.log(stack)

            switch(true){
                case (!isNaN(token)):
                    stack.push(Number(token));
                    break;
                case (token === "+"):
                    value = stack.pop() + stack.pop();
                    stack.push(value);
                    break; 
                case (token === "-"):
                    firstValue = stack.pop();
                    secondValue = stack.pop();
                    value = secondValue - firstValue;
                    stack.push(value);
                    break; 
                case (token === "*"):
                    value = stack.pop() * stack.pop();
                    stack.push(value);
                    break; 
                case (token === "/"):
                    firstValue = stack.pop();
                    secondValue = stack.pop();
                    value = Math.trunc(secondValue/firstValue);
                    stack.push(value);
                    break; 
            }
        }
        return stack.pop();
    }
}

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Had a leftover `console.log(stack)` at the top of every loop
 *   iteration (removed above).
 * - `switch(true)` with case expressions is an unusual/uncommon
 *   idiom for what is really an if/else-if chain (or a dispatch
 *   table keyed by operator string) — it works but reads oddly to
 *   most reviewers and is easy to get wrong (case order matters).
 * - `!isNaN(token)` correctly identifies negative-number tokens like
 *   "-3" as numbers (not the "-" operator) since token !== "-";
 *   good, this is a real edge case handled correctly.
 * - Time O(n), space O(n) — optimal for this problem.
 *
 * Areas of improvement:
 * - Replace `switch(true)` with a plain if/else-if chain or an
 *   operator-to-function map for clearer intent.
 * - `firstValue`/`secondValue`/`value` could be scoped inside each
 *   case with `const` instead of declared once at function scope.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    evalRPN(tokens) {
        const stack = [];
        const ops = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a / b),
        };

        for (const token of tokens) {
            if (token in ops) {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(ops[token](a, b));
            } else {
                stack.push(Number(token));
            }
        }

        return stack.pop();
    }
}
*/

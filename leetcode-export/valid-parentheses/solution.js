/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let val = s[i];
        switch (val) {
            case "(":
                stack.push(")");
                break;
            case "[":
                stack.push("]")
                break;
            case "{":
                stack.push("}")
                break;
            default:
                if (val !== stack.pop()) {
                    return false
                }
        }
    }

    return stack.length !== 0 ? false : true

};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Neat trick: instead of pushing the opening bracket and looking
 *   up a matching-pairs map on close, it pushes the *expected
 *   closing* bracket directly, so a closing bracket just needs
 *   `val !== stack.pop()`. Correct O(n) time and space, and safely
 *   handles an empty stack (`stack.pop()` on `[]` returns `undefined`,
 *   which correctly fails the `!==` check for any closing bracket).
 * - `return stack.length !== 0 ? false : true` is a verbose way to
 *   write `return stack.length === 0`.
 *
 * Areas of improvement:
 * - Simplify the final return to `return stack.length === 0;`.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var isValid = function (s) {
    const closingFor = { "(": ")", "[": "]", "{": "}" };
    const stack = [];

    for (const ch of s) {
        if (closingFor[ch]) {
            stack.push(closingFor[ch]);
        } else if (stack.pop() !== ch) {
            return false;
        }
    }

    return stack.length === 0;
};
*/
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closeToOpen = {
            ")" : "(",
            "}": "{",
            "]": "["
        }
        const stack = []

        for (let char of s){
            if(closeToOpen[char]){
                if(closeToOpen[char] === stack[stack.length -1]){
                    stack.pop()
                } else {
                    return false
                }
            }else{
                stack.push(char)
            }
        }
        return stack.length === 0

    }
}

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Correct and optimal — O(n) time, O(n) worst-case space, the standard
 *   stack approach for bracket matching. Handles empty string (returns
 *   true, stack stays empty), unmatched closers (top-of-stack comparison
 *   against `undefined` correctly fails), and unclosed openers (non-empty
 *   stack at the end correctly fails).
 * - No real flaws in this submission.
 *
 * Areas of improvement:
 * - Minor style nit: `closeToOpen` object literal is recreated on every
 *   call; hoisting it as a module-level constant would save a trivial
 *   amount of allocation if this were called repeatedly (not meaningful at
 *   LeetCode's scale, purely a style nit).
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    isValid(s) {
        const closeToOpen = {
            ')': '(',
            '}': '{',
            ']': '['
        };
        const stack = [];

        for (const char of s) {
            if (closeToOpen[char]) {
                if (stack.length === 0 || stack.pop() !== closeToOpen[char]) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }
        return stack.length === 0;
    }
}
*/

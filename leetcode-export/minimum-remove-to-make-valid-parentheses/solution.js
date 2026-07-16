/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let count = 0;
    const stack = [];

    for (let char of s) {
        if (char === ")" && count === 0) {
            continue;
        }
        if (char === "(") {
            count++
        }
        if (char === ")") {
            count--;
        }
        stack.push(char);
    }
    const bracketToRemove = count > 0 ? "(" : ")";

    for (let j = stack.length - 1; j >= 0 && count != 0; j--) {
        if (stack[j] === bracketToRemove) {
            stack.splice(j, 1);
            count--
        }
    }

    return stack.join("")

};

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Correctness is solid: the first pass drops unmatched `)` on the
 *   fly and counts net unmatched `(`; since `count` can never go
 *   negative after the first pass (unmatched `)` are always skipped),
 *   `bracketToRemove` only ever needs to be `"("`, and the second pass
 *   correctly strips exactly `count` trailing `(` from the right.
 * - Performance: `stack.splice(j, 1)` inside the cleanup loop is
 *   O(n) per call (it shifts every element after `j`), so in the
 *   worst case (many excess `(`) this is O(n^2) instead of O(n).
 *
 * Areas of improvement:
 * - Instead of splicing in a loop, mark indices to delete in a Set
 *   (or use a boolean array) during a single backward pass, then
 *   build the result with one `filter`/`join` pass — true O(n).
 * - Could also solve in one forward pass using an index stack instead
 *   of two passes plus splicing.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var minRemoveToMakeValid = function (s) {
    const chars = s.split("");
    const openIndexStack = [];
    const toRemove = new Set();

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === "(") {
            openIndexStack.push(i);
        } else if (chars[i] === ")") {
            if (openIndexStack.length) {
                openIndexStack.pop();
            } else {
                toRemove.add(i);
            }
        }
    }

    // any '(' left on the stack never found a match
    for (const idx of openIndexStack) toRemove.add(idx);

    return chars.filter((_, i) => !toRemove.has(i)).join("");
};
*/
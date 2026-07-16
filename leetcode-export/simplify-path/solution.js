/**
 * @param {string} path
 * @return {string}
 */

/** array with stack, loop through string, variable to collect the current string
*
 */
var simplifyPath = function (path) {
    let stack = [];
    const directories = path.split("/")
    console.log(directories)
    for (const dir of directories) {
        if (dir === "." || !dir) {
            continue
        }
        else if (dir === "..") {
            if (stack.length > 0) {
                stack.pop()
            }
        } else {
            stack.push(dir)
        }
    }

    return "/" + stack.join("/")

};

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Leftover `console.log(directories)` debug statement left in the
 *   function body — would print on every call in production/interview
 *   review.
 * - The comment above the function ("array with stack, loop through
 *   string...") is a scratch planning note rather than real documentation.
 *
 * Areas of improvement:
 * - Remove the `console.log`.
 * - Replace the scratch comment with a proper JSDoc description or drop it.
 * - Algorithm is already optimal: O(n) time, O(n) space via a stack,
 *   correctly collapses `.`, ignores empty segments from repeated `/`, and
 *   pops on `..` only when the stack is non-empty (so it can't go above
 *   root).
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var simplifyPath = function (path) {
    const stack = [];

    for (const segment of path.split("/")) {
        if (segment === "" || segment === ".") {
            continue;
        } else if (segment === "..") {
            if (stack.length > 0) stack.pop();
        } else {
            stack.push(segment);
        }
    }

    return "/" + stack.join("/");
};
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {

    function traverse(cur) {
        if (!cur) return 0

        let left = traverse(cur.left)
        let right = traverse(cur.right)

        res = Math.max(res, right + left)
        return Math.max(left, right) + 1
    }

    let res = 0
    traverse(root, res)
    return res
};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - `traverse(root, res)` passes `res` as a second argument, but
 *   `traverse` is only declared with one parameter (`cur`) — the
 *   second argument is silently ignored. It happens to still work
 *   because `traverse` mutates the outer `res` via closure, not
 *   through the argument, but passing `res` here is misleading and
 *   suggests a misunderstanding of how the closure update works.
 * - `res = Math.max(res, right + left)` (line 21) reassigns the
 *   closure variable without `let`/`const`/`this.` — correct here
 *   since `res` is already declared in the enclosing scope, but it
 *   reads like an accidental implicit global on first glance.
 * - Algorithm itself is correct and optimal: single DFS pass,
 *   O(n) time, O(h) space for the recursion stack.
 *
 * Areas of improvement:
 * - Drop the unused second argument from `traverse(root, res)`
 *   to `traverse(root)`.
 * - Rename `res` to something like `diameter` for clarity, and
 *   consider having `traverse` return `[height, diameter]` or use
 *   an object instead of relying purely on closure mutation.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var diameterOfBinaryTree = function (root) {
    let diameter = 0;

    function height(node) {
        if (!node) return 0;

        const left = height(node.left);
        const right = height(node.right);

        diameter = Math.max(diameter, left + right);
        return Math.max(left, right) + 1;
    }

    height(root);
    return diameter;
};
*/
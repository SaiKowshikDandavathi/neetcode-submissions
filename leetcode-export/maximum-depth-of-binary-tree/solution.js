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
var maxDepth = function (root) {
    if(!root) return 0
    let maxHeight = 1

    function traverse(root, height = 1) {
        maxHeight = Math.max(maxHeight, height)
        if (root.left) traverse(root.left, height + 1)
        if (root.right) traverse(root.right, height + 1)
    }

    traverse(root);
    return maxHeight

};

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Correct and O(n) time / O(h) space, but tracks depth via an
 *   external `maxHeight` variable mutated inside a nested `traverse`
 *   closure instead of the standard divide-and-conquer form
 *   `1 + Math.max(maxDepth(left), maxDepth(right))`. The side-effect
 *   style works here but is more state to reason about than needed.
 * - Naming the inner recursive parameter `root` shadows the outer
 *   `root` parameter, which is confusing to read even though it's
 *   harmless.
 *
 * Areas of improvement:
 * - Rewrite as a pure recursive function that returns the depth
 *   instead of mutating a shared variable — fewer moving parts, easier
 *   to trace in an interview.
 * - Rename the shadowed inner parameter (e.g. `node`) for clarity.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var maxDepth = function (root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
*/
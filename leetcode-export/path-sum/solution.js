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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false
    if (!root.left && !root.right) {
        return targetSum - root.val === 0;
    }
    targetSum -= root.val;
    return (hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum))
};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Mutating the `targetSum` parameter in place (`targetSum -= root.val`)
 *   works correctly here but is a slightly less clear style than computing
 *   a fresh `remaining` value, since it shadows the "input" meaning of the
 *   parameter across the recursive calls.
 *
 * Areas of improvement:
 * - Could rename the running total to something like `remaining` to make
 *   the recursive invariant (sum needed from this node down) more explicit.
 * - No other issues: this already uses the optimal O(n) time / O(h) space
 *   recursive approach and correctly handles the empty-tree and single-leaf
 *   edge cases.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    if (!root.left && !root.right) {
        return targetSum === root.val;
    }
    const remaining = targetSum - root.val;
    return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
};
*/
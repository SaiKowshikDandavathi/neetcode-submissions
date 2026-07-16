/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root || root === p || root === q) return root
    const LCAL = lowestCommonAncestor(root.left, p, q)
    const LCAR = lowestCommonAncestor(root.right, p, q)
    return (LCAL && LCAR) ? root : (LCAL || LCAR)

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Already the standard optimal approach for LCA in a general binary
 *   tree (no parent pointers, no BST ordering to exploit): a single
 *   post-order DFS, O(n) time, O(h) recursion-stack space — this is
 *   the best achievable without preprocessing.
 * - Minor nit: `LCAL`/`LCAR` (all-caps abbreviations) are a bit
 *   cryptic compared to something like `left`/`right`, though the
 *   intent is still recoverable from context.
 *
 * Areas of improvement:
 * - Rename `LCAL`/`LCAR` to `leftResult`/`rightResult` (or similar)
 *   for readability.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var lowestCommonAncestor = function (root, p, q) {
    // Post-order DFS: a node is the LCA if p and q are found in
    // different subtrees (or the node itself is p or q). O(n) time,
    // O(h) space.
    if (!root || root === p || root === q) return root;

    const leftResult = lowestCommonAncestor(root.left, p, q);
    const rightResult = lowestCommonAncestor(root.right, p, q);

    if (leftResult && rightResult) return root;
    return leftResult || rightResult;
};
*/
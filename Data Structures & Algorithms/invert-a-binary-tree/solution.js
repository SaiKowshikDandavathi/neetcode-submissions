/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return null;
        [root.left, root.right] = [this.invertTree(root.right), this.invertTree(root.left)];
        return root;
    }
}

/* ============================================================
 * REVIEW — Rating: 10/10
 *
 * Why this isn't perfect:
 * - Nothing to dock here. Correct (base case handles null, every
 *   node visited exactly once), optimal O(n) time / O(h) recursion
 *   stack space, and the destructuring assignment expresses the
 *   swap-of-inverted-subtrees in one line with no helper closures
 *   or mutable outer state. This is the canonical solution — it's
 *   the same shape as the "IDEAL SOLUTION" reference from previous
 *   rounds of review on this problem.
 * - It beat the prior winner (an iterative-style recursive closure
 *   named `_traverse` with a redundant `res` variable, now archived
 *   as `_archive/solution-round2.js`) on quality/concision while
 *   matching it on complexity.
 *
 * Areas of improvement:
 * - None. If anything, an iterative BFS/stack version could avoid
 *   recursion stack depth on pathologically skewed trees, but that's
 *   a real trade-off, not a flaw in this solution.
 * ============================================================ */

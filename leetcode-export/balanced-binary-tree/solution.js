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
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) return true

    return Math.abs(height(root.left) - height(root.right)) < 2
        && isBalanced(root.left)
        && isBalanced(root.right)

};

function height(node) {
    if (!node) {
        return -1
    }

    return 1 + Math.max(height(node.left), height(node.right))

}
/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - Correct result, but the algorithm is O(n^2) worst case: `isBalanced`
 *   calls `height()` on both children at every node, and `height()` itself
 *   walks the full subtree, so the same nodes get re-visited repeatedly as
 *   the recursion descends (classic "top-down" balanced-tree check). For a
 *   skewed tree of n nodes this degrades toward O(n^2).
 * - The well-known optimal approach is "bottom-up": compute height and
 *   balanced-ness in a single post-order pass, short-circuiting with a
 *   sentinel (e.g. -1) the moment an imbalance is found, for O(n) time.
 * - `height` and `isBalanced` are separate top-level functions relying on
 *   each other and on being called with the right argument order — fine
 *   here, but bundling them changes the complexity class, which matters
 *   more than the style.
 *
 * Areas of improvement:
 * - Rewrite as a single post-order DFS that returns height, or -1 as a
 *   sentinel for "already unbalanced", and propagate that sentinel up
 *   without any further recursive height calls once imbalance is detected.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var isBalanced = function (root) {
    function dfs(node) {
        if (!node) return 0;

        const left = dfs(node.left);
        if (left === -1) return -1;

        const right = dfs(node.right);
        if (right === -1) return -1;

        if (Math.abs(left - right) > 1) return -1;

        return 1 + Math.max(left, right);
    }

    return dfs(root) !== -1;
};
*/

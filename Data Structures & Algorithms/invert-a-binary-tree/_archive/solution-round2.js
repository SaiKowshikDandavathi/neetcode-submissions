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
        const _traverse = (node) => {
            if (!node) return;
            const temp = node.left;
            node.left = node.right;
            node.right = temp;
            if (node.left) {
                _traverse(node.left);
            }
            if (node.right) {
                _traverse(node.right);
            }
            return node;
        }
        const res = _traverse(root);
        return res;
    }
}

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct and optimal: O(n) time (every node visited once),
 *   O(h) recursion stack space. Swaps before recursing, which
 *   avoids re-reading already-swapped pointers.
 * - `node.left || null` and `node.right || null` are redundant —
 *   `node.left`/`node.right` are already either `null` or a
 *   `TreeNode` (always truthy), so the `|| null` never changes
 *   the value. Harmless but suggests uncertainty about the
 *   invariant.
 * - `_traverse` returns `node` and the outer function stores it
 *   in `res` before returning, but `res` is always just `root`
 *   (the same object reference) — the return value of `_traverse`
 *   is never used for anything other than what's already in scope.
 *
 * Areas of improvement:
 * - Drop the `|| null` fallbacks: `const temp = node.left; node.left
 *   = node.right; node.right = temp;`.
 * - Simplify the outer function to `_traverse(root); return root;`
 *   since the traversal mutates in place.
 * - The underscore prefix on `_traverse` is an unconventional
 *   naming choice for a local closure — not needed since it's
 *   already scoped inside `invertTree`.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    invertTree(root) {
        if (!root) return null;
        [root.left, root.right] = [this.invertTree(root.right), this.invertTree(root.left)];
        return root;
    }
}
*/

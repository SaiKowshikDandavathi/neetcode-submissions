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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let res = false
        if (!root && !subRoot) return true;
        if (!root || !subRoot) return false;
        const _traverse = (node) => {
            if(!node) return false
            if(this.sameTree(node,subRoot)) {
                res = true
                return
            }
            if(node.left) _traverse(node.left)
            if(node.right) _traverse(node.right)
        }
        _traverse(root)
        return res
    }

    sameTree(node1, node2) {
        if (!node1 && !node2) return true;
        if (!node1 || !node2 || node1.val != node2.val) return false;
        return this.sameTree(node1.left, node2.left) && this.sameTree(node1.right, node2.right);
    }
}

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - Correct: the `sameTree` helper is the clean boolean-returning
 *   recursion; the both-null/one-null/root-null guards at the top of
 *   `isSubtree` handle the empty-tree edge cases properly. O(n*m)
 *   time (n = nodes in `root`, m = nodes in `subRoot`, since every
 *   node in `root` can trigger a full `sameTree` comparison) / O(h)
 *   stack space — this is the standard accepted approach for this
 *   problem (an O(n+m) serialize-and-substring-match variant exists
 *   but is well beyond what's expected here).
 * - `_traverse` uses the same outer-mutable-`res`-flag pattern as
 *   the sibling `same-binary-tree` submissions: once a match sets
 *   `res = true`, it keeps recursing into every remaining node
 *   anyway instead of stopping. Doesn't change the asymptotic bound
 *   but is wasted work a boolean-returning traversal would skip via
 *   `||` short-circuit.
 * - `_traverse`'s `if (!node) return false` return value is never
 *   used by any caller (the function's only real output is the side
 *   effect on `res`) — dead code.
 * - The underscore prefix on `_traverse` is unconventional for a
 *   function already scoped inside `isSubtree`.
 *
 * Areas of improvement:
 * - Fold `isSubtree` into a direct boolean-returning recursion (see
 *   ideal below) using `||` across `sameTree(root, subRoot)` and the
 *   two child calls — drops the mutable flag, the closure, and the
 *   dead return value, and gets short-circuiting for free.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    isSubtree(root, subRoot) {
        if (!root) return !subRoot;
        if (this.sameTree(root, subRoot)) return true;
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    sameTree(node1, node2) {
        if (!node1 && !node2) return true;
        if (!node1 || !node2 || node1.val !== node2.val) return false;
        return this.sameTree(node1.left, node2.left) && this.sameTree(node1.right, node2.right);
    }
}
*/

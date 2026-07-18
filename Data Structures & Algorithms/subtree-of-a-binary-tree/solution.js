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
            if(res) return
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
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Correct, same guards and `sameTree` helper as before, O(n*m)
 *   time / O(h) stack space — the standard accepted approach for
 *   this problem.
 * - Improvement over the prior winner (archived as `_archive/solution.js`):
 *   adds `if (res) return` at the top of `_traverse`, so once a match
 *   is found the traversal actually stops instead of visiting every
 *   remaining node — the exact fix the previous review called for.
 * - Still carries the other two issues from last round: `_traverse`'s
 *   `if (!node) return false` return value is still never read by any
 *   caller (dead code), and it's still an outer-mutable-`res`-flag
 *   closure rather than a direct boolean-returning recursion — more
 *   moving parts than the problem needs, even with the early exit.
 *
 * Areas of improvement:
 * - Drop the dead `return false`.
 * - Fold `isSubtree` into a direct boolean-returning recursion (see
 *   ideal below) using `||` — removes the mutable flag and closure
 *   entirely and gets short-circuiting for free, rather than adding
 *   it back in manually.
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

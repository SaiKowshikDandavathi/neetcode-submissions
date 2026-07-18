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
     * @return {boolean}
     */
    isValidBST(root) {
        const stack = [];
        let res = true;   
        const _traverse = (node) => {
            if(!res) return
            if(node.left) _traverse(node.left)
            if(stack.length && stack[stack.length - 1] >= node.val) {
                res = false
            }
            stack.push(node.val)
            if(node.right) _traverse(node.right)
        }
        _traverse(root)
        return res
    }
}

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct: inorder DFS pushing values onto `stack` and comparing
 *   each new value against the last one pushed (`stack[stack.length -
 *   1] >= node.val`) is equivalent to tracking a single `prev`
 *   variable, and `>=` correctly rejects duplicates since a BST
 *   requires strict ordering.
 * - Improvement over the prior winner (archived as `_archive/solution.js`,
 *   which did a full traversal into an array followed by a separate
 *   linear scan with no short-circuit): this version checks ordering
 *   inline during the single traversal, and `if (!res) return` at the
 *   top of `_traverse` stops recursing into further subtrees once a
 *   violation is found — real wasted-work savings on an early
 *   violation, though the worst case (violation near the end, or none
 *   at all) still visits every node.
 * - Still uses `stack` as a growing array that accumulates every
 *   visited value, i.e. O(n) auxiliary space, when only the single
 *   last value is ever read — a plain `prev` variable would do the
 *   same job in O(1) extra space (beyond the unavoidable O(h)
 *   recursion stack).
 * - The underscore prefix on `_traverse` is unconventional for a
 *   closure already scoped inside `isValidBST` (same style choice
 *   seen in this author's other submissions).
 *
 * Areas of improvement:
 * - Replace `stack` with a single `prev` variable (see ideal below)
 *   to drop the O(n) auxiliary array down to O(1) extra space.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    isValidBST(root) {
        let prev = null;
        let valid = true;

        function dfs(node) {
            if (!node || !valid) return;
            dfs(node.left);
            if (prev !== null && node.val <= prev) {
                valid = false;
                return;
            }
            prev = node.val;
            dfs(node.right);
        }

        dfs(root);
        return valid;
    }
}
*/

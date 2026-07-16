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
        function dfs(cur){
            if(!cur) return
            if(cur.left) dfs(cur.left)
            if(cur.right) dfs(cur.right)
            let left = cur.left;
            let right = cur.right;
            cur.left = right;
            cur.right = left;
        }
        dfs(root);
        console.log(root)
        return root;
    }
}

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - `console.log(root)` before the return is a leftover debug
 *   statement (removed above).
 * - Otherwise correct and optimal: O(n) time (every node visited
 *   once), O(h) recursion stack space. Recurses into children before
 *   swapping, which is fine since it just needs to visit every node
 *   once regardless of order.
 *
 * Areas of improvement:
 * - The recursion visits children first and swaps after — swapping
 *   first (or using a one-line destructure `[cur.left, cur.right] =
 *   [cur.right, cur.left]`) would be slightly more idiomatic/concise.
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

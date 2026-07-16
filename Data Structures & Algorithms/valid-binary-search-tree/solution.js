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

        const data = [];

        function dfs(cur){
            if(!cur) return
            if(cur.left) dfs(cur.left);
            data.push(cur.val);
            if(cur.right) dfs(cur.right)
        }
        dfs(root);
        for(let i = 1; i < data.length;i++){
            let prev = data[i-1];
            let cur = data[i];
            if(prev >= cur) return false
        }
        return true
    }
}

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Correct, but does a full inorder traversal into a `data` array (O(n)
 *   extra space) and then a second linear pass to check ordering, when a
 *   single-pass inorder with a `prev` tracking variable (or bounds-passing
 *   recursion) would use O(1) extra space beyond the O(h) recursion stack.
 * - Doesn't short-circuit: even if an early violation is found, the full
 *   tree is still traversed into `data` before the violation is checked.
 * - Duplicate values aren't explicitly commented on — `prev >= cur` does
 *   correctly reject duplicates (BST requires strict ordering), which is
 *   right, but worth calling out since it's easy to get wrong with `>`.
 *
 * Areas of improvement:
 * - Track `prev` as a single variable during the inorder DFS itself and
 *   return false immediately on violation instead of buffering into an array.
 * - Alternatively use the min/max bounds-passing recursive pattern to avoid
 *   the traversal-then-check two-phase structure entirely.
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

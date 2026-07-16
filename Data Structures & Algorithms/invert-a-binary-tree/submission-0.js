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

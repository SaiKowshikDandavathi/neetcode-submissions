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
     * @return {number}
     */
    maxDepth(root) {
        if(!root) return 0
        let maxDepth = 1;

        function dfs(cur,depth){
            if(!cur) return;
            if(cur.left) dfs(cur.left, depth+1);
            if(cur.right) dfs(cur.right,depth+1);
            maxDepth = Math.max(maxDepth,depth);
        }
        dfs(root, 1)
        console.log(maxDepth)
        return maxDepth
    }
}

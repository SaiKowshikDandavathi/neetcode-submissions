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

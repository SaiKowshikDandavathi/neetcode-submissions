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
     * @return {number[][]}
     */
    levelOrder(root) {
        const data = new Map();
        function dfs(cur,height){
            if(!cur) return
            let mapValue = data.get(height) || [];
            mapValue.push(cur.val);
            data.set(height,mapValue);
            if(cur.left) dfs(cur.left,height+1);
            if(cur.right) dfs(cur.right,height+1);
        }
        dfs(root,0);
        console.log(data);
        return [...data].map(ele => ele[1]);
    }
}

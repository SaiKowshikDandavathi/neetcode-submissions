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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const data = [];
        function inOrder(cur){
            if(!cur) return
            if(cur.left) inOrder(cur.left);
            data.push(cur.val);
            if(cur.right) inOrder(cur.right);
        }
        inOrder(root);
        console.log(data)
        return data.length + 1 >= k ? data[k-1] : null
    }
}

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

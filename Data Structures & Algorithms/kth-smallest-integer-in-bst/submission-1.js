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
        const stack = [];
        let result;

        const _traverse = (node) => {
            if(!node || result) return
            if(node.left) _traverse(node.left)
            stack.push(node.val)
            if(stack.length === k) {
                result = stack[stack.length - 1]
                return
            }
            if(node.right) _traverse(node.right)
        }
        _traverse(root)
        return result
    }
}

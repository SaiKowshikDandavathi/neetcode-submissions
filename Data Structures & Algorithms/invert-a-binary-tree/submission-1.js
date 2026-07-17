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
        if (!root) return null;
        const _traverse = (node) => {
            if (!node) return;
            const temp = node.left || null;
            node.left = node.right || null;
            node.right = temp;
            if (node.left) {
                _traverse(node.left);
            }
            if (node.right) {
                _traverse(node.right);
            }
            return node;
        }
        const res = _traverse(root);
        return res;
    }
}

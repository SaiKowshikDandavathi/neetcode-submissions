/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if(!root) return 0
    let maxHeight = 1

    function traverse(root, height = 1) {
        maxHeight = Math.max(maxHeight, height)
        if (root.left) traverse(root.left, height + 1)
        if (root.right) traverse(root.right, height + 1)
    }

    traverse(root);
    return maxHeight

};
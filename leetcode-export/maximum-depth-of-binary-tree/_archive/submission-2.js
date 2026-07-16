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
    if (!root) return 0
    let maxHeight = 1;

    function dfs(node, height = 0) {
        height = height + 1
        if (node.left) dfs(node.left, height)
        if (node.right) dfs(node.right, height)
        maxHeight = Math.max(maxHeight, height)
    }
    dfs(root)
    return maxHeight

};
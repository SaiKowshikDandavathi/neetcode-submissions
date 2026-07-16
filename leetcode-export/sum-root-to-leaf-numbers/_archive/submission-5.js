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
var sumNumbers = function (root) {
    let ans = 0

    function traverse(cur, val) {
        if (!cur.left && !cur.right) {
            ans += val * 10 + cur.val
            return
        }
        if (cur.left) {
            traverse(cur.left, val * 10 + cur.val)
        } if (cur.right) {
            traverse(cur.right, val * 10 + cur.val)
        }

    }
    traverse(root, 0)
    return ans

};
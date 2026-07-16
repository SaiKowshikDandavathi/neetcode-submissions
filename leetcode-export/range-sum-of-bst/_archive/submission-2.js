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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {

    function traverse(cur) {
        if (cur.left) {
            traverse(cur.left)
        }

        (cur.val >= low && cur.val <= high) ? data.push(cur.val) : 0

        if (cur.right) {
            traverse(cur.right)
        }
    }
    let data = [];
    traverse(root)
    return data.reduce((acc, cur) => {
        return acc + cur
    }, 0)

};
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

        data.push(cur.val)

        if (cur.right) {
            traverse(cur.right)
        }
    }
    let data = [];
    traverse(root)
    const lowIndex = data.indexOf(low)
    const highIndex = data.indexOf(high)
    return data.slice(lowIndex, highIndex + 1).reduce((acc, cur) => {
        return acc + cur
    }, 0)

};
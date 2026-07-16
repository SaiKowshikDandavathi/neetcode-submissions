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

    function traverse(cur, val) {
        val = `${val || ''}${cur.val}`
        if (!cur.left && !cur.right) {
            data.push(val)
        }
        if (cur.left) {
            traverse(cur.left, val)
        } if (cur.right) {
            traverse(cur.right, val)
        }

    }
    let data = []
    let val = ''
    traverse(root)
    return data.reduce((acc, cur) => {
        return Number(cur) + acc
    }, 0)
};
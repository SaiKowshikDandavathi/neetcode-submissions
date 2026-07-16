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

    function dfs(cur) {
        if (!cur) return 0
        if (cur.left) {
            dfs(cur.left)
        }
        if (cur.val >= low && cur.val <= high) {
            data.push(cur.val)
        }
        if (cur.right) {
            dfs(cur.right)
        }

    }
    let data = []
    dfs(root)
    return data.reduce((acc, cur) => {
        return acc + cur
    }, 0)

};
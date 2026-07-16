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
 * @return {number[][]}
 */
var verticalOrder = function (root) {

    function traverse(cur, x, y) {
        if (!cur) return []
        let xValue = data.get(x) || []
        xValue.push([cur.val, y])
        data.set(x, xValue)

        if (cur.left) {
            traverse(cur.left, x - 1, y - 1)
        }

        if (cur.right) {
            traverse(cur.right, x + 1, y - 1)
        }

    }
    let data = new Map()
    let x = 0
    let y = 0
    traverse(root, x, y)
    console.log(data)
    const sortedData = [...data].sort((a, b) => a[0] - b[0]).map(ele => ele[1])

    let res = []

    for (let i = 0; i < sortedData.length; i++) {
        if (sortedData[i].length > 1) {
            sortedData[i].sort((a, b) => b[1] - a[1])
        }
        res.push(sortedData[i].map(e => e[0]))
    }
    console.log(res)

    return res


};
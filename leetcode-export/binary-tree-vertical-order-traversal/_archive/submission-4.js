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
    const res = new Map();

    function dfs(node, xindex, yindex) {

        if(!node) return [];
        const indexValue = res.get(yindex) || [];
        indexValue.push([node.val, xindex])
        res.set(yindex, indexValue);

        if (node.left) {
            dfs(node.left, xindex - 1, yindex - 1);
        }

        if (node.right) {
            dfs(node.right, xindex - 1, yindex + 1);
        }

    }

    dfs(root, 0, 0)
    const sortedRes = [...res].sort((a, b) => a[0] - b[0]).map(val => val[1]);
    // console.log(sortedRes)

    const finalRes = [];
    for (const res of sortedRes) {
        res.sort((a, b) => b[1] - a[1]);
        const val = res.map(e => e[0]);
        finalRes.push(val)
    }

    // console.log(finalRes)
    return finalRes

};


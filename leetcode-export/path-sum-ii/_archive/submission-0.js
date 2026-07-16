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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    const res = [];

    function dfs(cur, targetSum, path) {
        if (!cur) return false;
        path.push(cur.val);
        if (!cur.left && !cur.right) {
            if (targetSum - cur.val === 0) {
                res.push(Array.from(path))
            }
        }
        targetSum -= cur.val;
        dfs(cur.left, targetSum, path)
        dfs(cur.right, targetSum, path)
        // console.log("Before:",path)

        path.pop();
        // console.log("After:",path)

    }

    dfs(root, targetSum, []);
    // console.log(res);

    return res;

};
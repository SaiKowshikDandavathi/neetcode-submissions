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

    let paths = [];

    function dfs(cur, path) {
        if (!cur) return
        path.push(cur.val);
        if (!cur.left && !cur.right) {
            paths.push([...path]);
        } else {
            if (cur.left) dfs(cur.left, path);
            if (cur.right) dfs(cur.right, path);
        }
        path.pop();
    }

    dfs(root, []);
    // console.log(paths, res);

    return paths.map(arr => arr.join("")).reduce((a, b) => {
        return Number(a) + Number(b)
    }, 0);

};
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
 * @return {string}
 */
var smallestFromLeaf = function (root) {

    let best = null;

    function dfs(cur, path) {
        if (!cur) return;
        let value = String.fromCharCode(97 + cur.val);
        path = value + path;
        if (!cur.left && !cur.right) {
            if (best === null || best >= path) {
                best = path
            };
            return
        }
        if (cur.left) dfs(cur.left, path);
        if (cur.right) dfs(cur.right, path)
    }

    dfs(root, '');
    return best

};
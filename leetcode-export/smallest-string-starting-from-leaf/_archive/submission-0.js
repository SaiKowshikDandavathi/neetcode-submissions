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
    const chars = "abcdefghijklmnopqrstuvwxyz".split("");
    let res;

    function dfs(cur, path) {
        if (!cur) return
        path.push(cur.val);
        if (!cur.left && !cur.right) {
            let charRepresentation = path.map(num => chars[num]).reverse().join("");
            if(res > charRepresentation || !res) res = charRepresentation;
        } else {
            if (cur.left) dfs(cur.left, path);
            if (cur.right) dfs(cur.right, path);
        }
        path.pop();

    }
    dfs(root, []);
    return res;
};


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

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Stray semicolon after the `if (best === null || best >= path) { ... };`
 *   block — harmless but a lint-flaggable artifact.
 * - `best >= path` reads slightly ambiguous at a glance; `path <= best`
 *   or explicitly naming the comparison (e.g. a comment noting JS compares
 *   strings lexicographically) would help a reviewer confirm intent
 *   quickly.
 *
 * Areas of improvement:
 * - Remove the stray semicolon.
 * - A one-line comment confirming lexicographic string comparison is
 *   intentional would help.
 * - Building the path as an immutable string (`path = value + path`)
 *   avoids explicit backtracking/pop bookkeeping, which is clean. Time is
 *   O(n^2) worst case (n leaf paths of length up to n each get compared/
 *   concatenated), which is the accepted optimal complexity class for this
 *   problem given string operations are inherently linear in path length.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var smallestFromLeaf = function (root) {
    let best = null;

    function dfs(node, path) {
        if (!node) return;

        path = String.fromCharCode(97 + node.val) + path;

        if (!node.left && !node.right) {
            if (best === null || path < best) best = path;
            return;
        }

        dfs(node.left, path);
        dfs(node.right, path);
    }

    dfs(root, '');
    return best;
};
*/
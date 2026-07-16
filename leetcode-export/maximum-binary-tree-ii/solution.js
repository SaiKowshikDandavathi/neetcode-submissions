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
 * @param {number} val
 * @return {TreeNode}
 */

function successor() {

}

var insertIntoMaxTree = function (root, val) {

    function dfs(node) {
        if (val > 0 && (!node || val > node.val)) {
            let temp = val
            val = 0
            return new TreeNode(temp, node, null)
        }
        if(!node) return null
        node.right = dfs(node.right)
        node.left = dfs(node.left)
        return node
    }

    return dfs(root)
};

/* ============================================================
 * REVIEW — Rating: 4/10
 *
 * Why this isn't perfect:
 * - Dead code: `function successor() {}` is declared and never called
 *   anywhere in the file.
 * - Once the insertion happens, `val` is set to 0 so the guard clause
 *   never fires again, yet `dfs` keeps recursing into node.right and
 *   node.left for every remaining node in the tree — the whole
 *   original tree is re-walked doing nothing, making this O(n) time
 *   when the correct approach only needs to walk down one path, O(h).
 * - Mutating a variable captured from the outer closure (`val = 0`) as
 *   a "have I inserted yet" flag is a fragile pattern — a dedicated
 *   boolean or an early return after insertion would be much clearer.
 *
 * Areas of improvement:
 * - Delete the unused `successor` function.
 * - Stop recursing immediately after insertion (return as soon as the
 *   new node is created/attached) so the algorithm is O(h) instead of
 *   O(n).
 * - Prefer an iterative walk down the right spine (the actual
 *   structure of a max-tree) rather than a full recursive traversal.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var insertIntoMaxTree = function (root, val) {
    if (!root || val > root.val) {
        return new TreeNode(val, root, null);
    }

    let node = root;
    while (node.right && node.right.val > val) {
        node = node.right;
    }
    node.right = new TreeNode(val, node.right, null);

    return root;
};
*/
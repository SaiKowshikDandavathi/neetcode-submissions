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

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - `dfs` visits every node in the tree unconditionally (both children,
 *   always) even though the input is a BST — it never uses the BST
 *   ordering property to prune subtrees that fall entirely outside
 *   [low, high]. That makes this a plain O(n) tree-sum instead of the
 *   BST-optimal O(h + k) approach (h = height, k = nodes in range).
 * - Collects qualifying values into a `data` array and then sums with
 *   `.reduce`, which is an unnecessary O(n) space allocation — the sum
 *   could be accumulated directly during the traversal.
 *
 * Areas of improvement:
 * - Use the BST property: if `cur.val < low`, only recurse right; if
 *   `cur.val > high`, only recurse left; otherwise recurse both sides and
 *   include `cur.val`.
 * - Accumulate the running total in the recursion instead of building an
 *   intermediate array.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var rangeSumBST = function (root, low, high) {
    function dfs(cur) {
        if (!cur) return 0;

        if (cur.val < low) return dfs(cur.right);
        if (cur.val > high) return dfs(cur.left);

        return cur.val + dfs(cur.left) + dfs(cur.right);
    }

    return dfs(root);
};
*/
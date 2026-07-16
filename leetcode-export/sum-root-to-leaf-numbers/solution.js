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
    let ans = 0

    function traverse(cur, val) {
        if (!cur.left && !cur.right) {
            ans += val * 10 + cur.val
            return
        }
        if (cur.left) {
            traverse(cur.left, val * 10 + cur.val)
        } if (cur.right) {
            traverse(cur.right, val * 10 + cur.val)
        }

    }
    traverse(root, 0)
    return ans

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - This is the optimal approach: a single DFS pass accumulating the
 *   running root-to-node value (`val * 10 + cur.val`) and adding it
 *   to `ans` only at leaves. O(n) time, O(h) recursion space — no
 *   intermediate string building or array of paths like other
 *   submissions in this problem's history used.
 * - Relies on `root` never being null (accesses `cur.left` directly
 *   without a null guard), which is safe here because the LeetCode
 *   constraint guarantees at least one node, but it's a latent
 *   fragility if this function were reused elsewhere.
 * - `if (cur.left) {...} if (cur.right) {...}` on one line (no `else`
 *   between the two `if` blocks) is a bit visually cramped.
 *
 * Areas of improvement:
 * - Put the second `if (cur.right)` on its own line for readability.
 * - Optionally guard `if (!root) return 0;` at the top of `sumNumbers`
 *   to make the function robust to being called standalone.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var sumNumbers = function (root) {
    let total = 0;

    function dfs(node, pathValue) {
        if (!node) return;
        const currentValue = pathValue * 10 + node.val;
        if (!node.left && !node.right) {
            total += currentValue;
            return;
        }
        dfs(node.left, currentValue);
        dfs(node.right, currentValue);
    }

    dfs(root, 0);
    return total;
};
*/
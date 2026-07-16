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
                res.push([...path])
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

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - `dfs` is typed/used as if it returns a boolean (`if (!cur) return false`)
 *   but the return value is never checked by either caller (`dfs(cur.left, ...)`
 *   and `dfs(cur.right, ...)` are called as statements) — dead/misleading
 *   return semantics.
 * - Leftover commented-out `console.log` debug statements (lines "Before:",
 *   "After:", and the one after `dfs(root, ...)`) should have been cleaned
 *   up before considering this submission-ready.
 * - `targetSum` is shadowed and mutated inside `dfs` as a running remainder,
 *   which works but reads confusingly next to the outer `targetSum` param.
 *
 * Areas of improvement:
 * - Drop the misleading `return false` / `return` values from `dfs` since
 *   nothing consumes them.
 * - Remove the dead commented-out logging lines.
 * - Rename the inner running total to `remaining` to avoid parameter shadowing.
 * - Otherwise this is the correct, optimal backtracking approach: O(n) time,
 *   O(h) recursion depth plus O(n) output storage, with proper push/pop
 *   backtracking of the path array.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var pathSum = function (root, targetSum) {
    const res = [];

    function dfs(node, remaining, path) {
        if (!node) return;
        path.push(node.val);
        remaining -= node.val;

        if (!node.left && !node.right && remaining === 0) {
            res.push([...path]);
        } else {
            dfs(node.left, remaining, path);
            dfs(node.right, remaining, path);
        }

        path.pop();
    }

    dfs(root, targetSum, []);
    return res;
};
*/
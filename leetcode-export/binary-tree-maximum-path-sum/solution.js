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
var maxPathSum = function (root) {
    const res = [root.val];
    dfs(root, res);
    return res[0];
}

function dfs(root, res) {
    if (root === null) {
        return 0;
    }

    const leftMax = Math.max(dfs(root.left, res), 0);
    const rightMax = Math.max(dfs(root.right, res), 0);


    res[0] = Math.max(res[0], root.val + leftMax + rightMax);// -15, 10 + 0 + 0
    // console.log(leftMax, rightMax, root.val, res[0])

    return root.val + Math.max(leftMax, rightMax);
}

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct and optimal — single O(n) post-order DFS, O(h) recursion
 *   stack space. `Math.max(dfs(...), 0)` correctly discards negative
 *   contributions from a subtree, and `res[0]` (boxed in an array to be
 *   mutable across recursive calls) correctly tracks the best "bend"
 *   path (left + node + right) while the return value only propagates the
 *   best single-branch path upward, which is the standard correct pattern.
 * - Leaves a stray scratch-work comment (`// -15, 10 + 0 + 0`) on the
 *   `res[0] = ...` line — a leftover debugging trace that should be
 *   cleaned up before an interview review.
 *
 * Areas of improvement:
 * - Remove the leftover inline scratch comment.
 * - Consider using a plain outer `let maxSum` variable captured by closure
 *   instead of a single-element array (`res[0]`) as the mutable
 *   accumulator — functionally equivalent but reads more directly.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var maxPathSum = function (root) {
    let maxSum = root.val;

    function dfs(node) {
        if (node === null) return 0;

        const leftMax = Math.max(dfs(node.left), 0);
        const rightMax = Math.max(dfs(node.right), 0);

        maxSum = Math.max(maxSum, node.val + leftMax + rightMax);

        return node.val + Math.max(leftMax, rightMax);
    }

    dfs(root);
    return maxSum;
};
*/

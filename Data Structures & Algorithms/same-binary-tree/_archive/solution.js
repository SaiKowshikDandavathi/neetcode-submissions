/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let res = true;
        if (!p && !q) return res;
        const traverse = (node1, node2) => {
            if ((!node1 && node2) || (node1 && !node2) || node1?.val != node2?.val) {
                res = false;
                return;
            }
            if (node1.left || node2.left) traverse(node1.left, node2.left);
            if (node1.right || node2.right) traverse(node1.right, node2.right);
        };
        traverse(p, q);
        return res;
    }
}

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - Correct: the mismatch check `(!node1 && node2) || (node1 && !node2)
 *   || node1?.val != node2?.val` catches every null/value mismatch,
 *   and a recursive call only happens when at least one side has a
 *   child, so `node1.left`/`node2.left` are never accessed on a null
 *   node after that guard. O(n) time, O(h) recursion stack — asymptotically
 *   optimal.
 * - No short-circuiting: once `res` is set to `false` deep in the
 *   tree, the traversal keeps visiting every remaining node anyway
 *   (the `if (node1.left || node2.left) traverse(...)` calls don't
 *   check `res` first). Doesn't change the asymptotic bound but does
 *   wasted work that a boolean-returning recursion would skip via
 *   `&&` short-circuit.
 * - Uses an outer mutable `res` flag plus a closure (`traverse`)
 *   instead of the standard pattern of returning a boolean directly
 *   from the recursion — more moving parts than the problem needs.
 * - Nearly identical to the other candidate this round
 *   (`_archive/submission-2.js`), which used two extra intermediate
 *   variables (`node1Val`/`node2Val`) for the same check — this one
 *   was chosen as it's the more concise of the two equivalent
 *   implementations.
 *
 * Areas of improvement:
 * - Rewrite as a direct boolean-returning recursion (see ideal below)
 *   to drop the mutable state, the closure, and get short-circuit
 *   behavior for free.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    isSameTree(p, q) {
        if (!p && !q) return true;
        if (!p || !q || p.val !== q.val) return false;
        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}
*/

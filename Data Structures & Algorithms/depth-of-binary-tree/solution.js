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
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if(!root) return 0
        let maxDepth = 1;

        function dfs(cur,depth){
            if(!cur) return;
            if(cur.left) dfs(cur.left, depth+1);
            if(cur.right) dfs(cur.right,depth+1);
            maxDepth = Math.max(maxDepth,depth);
        }
        dfs(root, 1)
        console.log(maxDepth)
        return maxDepth
    }
}

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - `console.log(maxDepth)` before the return is a leftover debug
 *   statement (removed above).
 * - The algorithm mutates an outer `maxDepth` variable instead of
 *   returning depth from the recursion. It happens to be correct
 *   (every node, including leaves, updates `maxDepth` with its own
 *   `depth` at the end of its own call), but it's a convoluted way to
 *   express "max depth" — it recomputes/overwrites `maxDepth` at
 *   every single node rather than just leaves, which works but
 *   obscures the actual recurrence relation.
 * - Time is O(n) (every node visited once) which is optimal, but the
 *   closure-based mutable state adds cognitive overhead versus the
 *   standard `1 + max(left, right)` recursive formula.
 *
 * Areas of improvement:
 * - Rewrite using the standard recursive formula that returns depth
 *   directly instead of mutating shared state.
 * - Remove the console.log.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    maxDepth(root) {
        if (!root) return 0;
        return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
    }
}
*/

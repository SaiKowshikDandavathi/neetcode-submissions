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
 * - `console.log(maxDepth)` on line 28 is a leftover debug statement.
 *   (Note: an earlier review of this same file claimed this had
 *   already been removed — it hadn't; it's still here.)
 * - The algorithm mutates an outer `maxDepth` variable and recomputes
 *   it at every node (not just leaves) instead of returning depth
 *   directly from the recursion. It's correct but obscures the
 *   actual recurrence relation ("depth of a node = 1 + max depth of
 *   its children").
 * - Beat out two BFS alternatives (submission-1, submission-2) this
 *   round: both use `queue.shift()` inside their level-order loop,
 *   which is O(n) per call, degrading the overall traversal to
 *   O(n^2) in practice. This DFS is genuinely O(n) time / O(h)
 *   stack space, so it wins on complexity despite the rougher style.
 *
 * Areas of improvement:
 * - Remove the `console.log`.
 * - Rewrite using the standard `1 + max(left, right)` recursive
 *   formula instead of mutating shared state.
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

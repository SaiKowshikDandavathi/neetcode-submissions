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
     * @return {number[][]}
     */
    levelOrder(root) {
        const data = new Map();
        function dfs(cur,height){
            if(!cur) return
            let mapValue = data.get(height) || [];
            mapValue.push(cur.val);
            data.set(height,mapValue);
            if(cur.left) dfs(cur.left,height+1);
            if(cur.right) dfs(cur.right,height+1);
        }
        dfs(root,0);
        console.log(data);
        return [...data].map(ele => ele[1]);
    }
}

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - `console.log(data)` is a leftover debug statement that shouldn't
 *   ship.
 * - Uses DFS with a height-keyed Map to simulate level order instead
 *   of the conventional BFS/queue approach. It happens to produce the
 *   correct left-to-right order (since left is always recursed before
 *   right at each node, values are appended to each level's array in
 *   the right sequence), but it's a non-obvious trick for a problem
 *   whose name literally says "level order" — a reviewer would expect
 *   a queue-based BFS here.
 * - Same O(n) time / O(n) space as BFS, so no complexity difference,
 *   just a readability/expectation mismatch.
 *
 * Areas of improvement:
 * - Rewrite as iterative BFS with an explicit queue, which is both
 *   the conventional solution shape and avoids O(h) recursion depth
 *   for skewed trees.
 * - Remove the console.log.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    levelOrder(root) {
        if (!root) return [];
        const res = [];
        let queue = [root];

        while (queue.length) {
            const level = [];
            const next = [];
            for (const node of queue) {
                level.push(node.val);
                if (node.left) next.push(node.left);
                if (node.right) next.push(node.right);
            }
            res.push(level);
            queue = next;
        }

        return res;
    }
}
*/

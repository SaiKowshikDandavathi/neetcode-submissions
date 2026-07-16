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
     * @return {number[]}
     */
    rightSideView(root) {
        const data = new Map();
        function dfs(cur, height){
            if(!cur) return
            let mapValue = data.get(height) || [];
            mapValue.push(cur.val);
            data.set(height,mapValue);
            if(cur.right) dfs(cur.right,height+1);
            if(cur.left) dfs(cur.left,height+1);
        }
        dfs(root,0);
        console.log(data);
        return [...data].map(ele => ele[1][0]);
    }
}

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - `console.log(data)` is a leftover debug statement that shouldn't
 *   ship in reviewed code.
 * - The `data` map stores an array of ALL node values at each height
 *   via `mapValue.push(cur.val)`, but only `ele[1][0]` (the first
 *   value seen) is ever used. That's wasted allocation/O(n) extra
 *   space for values that are collected and then discarded.
 * - Correctness relies on visiting right-before-left in DFS so the
 *   first value recorded per level is the rightmost node — correct,
 *   but the intent isn't obvious from the code and deserves a comment.
 *
 * Areas of improvement:
 * - Track a single `res[height] = cur.val` (only set once, or always
 *   overwrite since right visited first is enough) instead of
 *   building arrays per level.
 * - Remove the console.log.
 * - Consider an iterative BFS (queue, last node per level) as the
 *   more conventional/expected solution shape for this problem.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    rightSideView(root) {
        if (!root) return [];
        const res = [];
        let queue = [root];

        while (queue.length) {
            const next = [];
            res.push(queue[queue.length - 1].val);
            for (const node of queue) {
                if (node.left) next.push(node.left);
                if (node.right) next.push(node.right);
            }
            queue = next;
        }

        return res;
    }
}
*/

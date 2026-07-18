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
        let res = [];
        if(!root) return res
        let queue = [root];
        while(queue.length){
            let level = [];
            let next = [];
            for (const node of queue){
                level.push(node.val);
                if(node.left) next.push(node.left)
                if(node.right) next.push(node.right)
            }
            res.push(level)
            queue = next
        }
        return res
    }
}

/* ============================================================
 * REVIEW — Rating: 10/10
 *
 * Why this isn't perfect:
 * - Nothing to dock. Correct, and this is exactly the conventional
 *   BFS-with-a-`next`-array shape previously listed as the "IDEAL
 *   SOLUTION" reference for this problem: O(n) time, O(n) space for
 *   the widest level, and it avoids `queue.shift()` (swapping in a
 *   freshly built `next` array each level instead), so it doesn't
 *   suffer the O(n^2)-in-practice cost that array-shift-based BFS
 *   attempts had in earlier rounds.
 * - It beat the prior winner (a DFS + height-keyed Map trick, now
 *   archived as `_archive/solution.js`) which was also O(n) but left
 *   a debug `console.log` in and used a non-obvious approach for a
 *   problem whose name literally says "level order" — this version
 *   is both cleaner and matches the conventional/expected shape.
 *
 * Areas of improvement:
 * - None.
 * ============================================================ */

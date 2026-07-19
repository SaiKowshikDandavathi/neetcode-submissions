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
        if (!root) return [];
        let queue = [root];
        let res = [];

        while (queue.length) {
            let next = [];
            let level = [];
            for (const node of queue) {
                level.push(node.val);
                if (node.left) next.push(node.left);
                if (node.right) next.push(node.right);
            }
            queue = next;
            res.push(level);
        }
        return res.map((e) => e[e.length - 1]);
    }
}

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Builds a full `level` array of every node's value at each depth via
 *   `level.push(node.val)`, but only the last entry (`e[e.length - 1]`)
 *   is ever read back out in the final `.map()`. The intermediate values
 *   are collected and then discarded — unnecessary allocation, though it
 *   doesn't change the overall O(n) time/space complexity.
 * - `res` and `level` are declared with `let` but never reassigned;
 *   `const` would better signal intent.
 *
 * Areas of improvement:
 * - Track just the last node's value per level directly (e.g.
 *   `res.push(queue[queue.length - 1].val)` before descending, or keep a
 *   running `last` variable inside the loop) instead of collecting a
 *   throwaway array per level.
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
            res.push(queue[queue.length - 1].val);
            const next = [];
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

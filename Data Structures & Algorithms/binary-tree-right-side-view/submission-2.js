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

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
        let depth = 0;
        if (!root) return depth;
        const queue = [root];
        while (queue.length) {
            let size = queue.length;
            while (size--) {
                let node = queue.shift();
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
            depth++;
        }
        return depth
    }
}

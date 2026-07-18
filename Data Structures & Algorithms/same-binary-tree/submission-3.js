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

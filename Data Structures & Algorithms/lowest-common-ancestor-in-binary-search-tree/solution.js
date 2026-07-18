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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if(!p || !q) return root;
        if(p.val === root.val || q.val === root.val) return root;
        if(p.val > root.val && q.val > root.val) return this.lowestCommonAncestor(root.right,p,q);
        if(p.val < root.val && q.val < root.val) return this.lowestCommonAncestor(root.left,p,q);
        return root
    }
}

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correctly exploits the BST property: O(h) time where h is tree
 *   height, since each call discards one whole subtree. That's
 *   optimal for this problem.
 * - Implemented recursively, giving O(h) call-stack space; an
 *   iterative version would achieve the same time complexity in O(1)
 *   space, which is the more space-optimal shape for this problem.
 * - `if(!p || !q) return root` is defensive code for an input shape
 *   (`p`/`q` null) that LeetCode's constraints guarantee never
 *   happens, so it's effectively dead code.
 * - A new submission this round (`submission-1`, now archived) was
 *   functionally identical — same checks, same recursion, just the
 *   left/right branch order swapped and slightly more consistent
 *   spacing/semicolons. No behavioral difference, so this file
 *   remains the pick rather than shuffling for a cosmetic-only change.
 *
 * Areas of improvement:
 * - Convert to an iterative loop to drop the O(h) recursion stack
 *   down to O(1) extra space.
 * - Drop the unreachable null-check, or replace it with a comment
 *   explaining it's defensive.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    lowestCommonAncestor(root, p, q) {
        let cur = root;

        while (cur) {
            if (p.val < cur.val && q.val < cur.val) {
                cur = cur.left;
            } else if (p.val > cur.val && q.val > cur.val) {
                cur = cur.right;
            } else {
                return cur;
            }
        }

        return null;
    }
}
*/

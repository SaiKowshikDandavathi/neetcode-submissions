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
    isSameTree(p, q) {
        if (!p && !q) return true;
        if (!p || !q || p.val !== q.val) return false;
        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }

}

/* ============================================================
 * REVIEW — Rating: 10/10
 *
 * Why this isn't perfect:
 * - Nothing to dock. Correct (both-null base case, then a single
 *   guard for any null/value mismatch, else recurse), optimal O(n)
 *   time / O(h) stack space, and the `&&` composition short-circuits
 *   for free the moment a mismatch is found anywhere in the tree —
 *   no outer mutable state or closures needed.
 * - This is exactly the direct boolean-returning recursion previously
 *   listed as the "IDEAL SOLUTION" reference for this problem; it
 *   beat the prior winner (a `res` + closure pattern that never
 *   short-circuited, now archived as `_archive/solution.js`) outright.
 *
 * Areas of improvement:
 * - None.
 * ============================================================ */

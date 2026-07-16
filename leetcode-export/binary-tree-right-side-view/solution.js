/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {

    function traverse(cur, h) {
        /** Idea here is to over write the value at any given height, since this runs on left first, left writes it and if there is a right, then there it overwrites the array at index or else there is nothing on that height and view is not blocked, hence left value can be seen */
        if (!cur) return
        data[h] = cur.val
        if (cur.left) {
            traverse(cur.left, h + 1)
        }
        if (cur.right) {
            traverse(cur.right, h + 1)
        }
    }
    let data = []
    traverse(root,0)
    return data;

};
/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Correct and clever: traverses left-before-right at every node and
 *   simply overwrites `data[h]` on each visit, relying on the fact that a
 *   right-side node at a given height is always visited after every node
 *   in a left subtree at that same height (since left is fully explored
 *   before right at each ancestor). O(n) time, O(h) recursion + O(n)
 *   output — asymptotically optimal.
 * - Includes a clear inline comment explaining the (non-obvious)
 *   correctness argument, which is good practice — most alternative
 *   submissions in this repo skip that.
 *
 * Areas of improvement:
 * - Minor nit: `data` and `h` are somewhat terse names; `result`/`depth`
 *   would read slightly more clearly to someone unfamiliar with the trick.
 * - No explicit `root === null` guard, though `traverse` handles it via
 *   `if (!cur) return`, so this isn't a functional gap.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var rightSideView = function (root) {
    const result = [];

    function traverse(node, depth) {
        if (!node) return;
        result[depth] = node.val;
        traverse(node.left, depth + 1);
        traverse(node.right, depth + 1);
    }

    traverse(root, 0);
    return result;
};
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    if( root.val < p.val && root.val < q.val){
        return lowestCommonAncestor( root.right, p, q);
    }

    return root;

};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Compares `root.val`, `p.val`, `q.val` rather than node references.
 *   This is correct as long as the tree has no duplicate values (the
 *   standard assumption for this problem), but comparing `root === p`
 *   / `root === q` directly would be more robust and wouldn't depend
 *   on that assumption.
 * - Uses O(h) recursion stack space (h = tree height); an iterative
 *   version achieves the same O(h) time bound with O(1) space by
 *   walking down with a `while` loop instead of recursing.
 * - Otherwise this is the textbook optimal BST LCA approach: O(h) time,
 *   using the BST ordering property to discard one whole subtree at
 *   each step instead of a general O(n) tree search.
 *
 * Areas of improvement:
 * - Convert to an iterative loop to drop the O(h) call-stack space to
 *   O(1).
 * - Compare node identity (`root === p`) alongside or instead of
 *   `.val`, to avoid relying on the no-duplicate-values assumption.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var lowestCommonAncestor = function (root, p, q) {
    // BST ordering lets us discard one whole subtree at each step
    // instead of searching both. Iterative: O(h) time, O(1) space.
    let node = root;

    while (node) {
        if (p.val < node.val && q.val < node.val) {
            node = node.left;
        } else if (p.val > node.val && q.val > node.val) {
            node = node.right;
        } else {
            return node;
        }
    }

    return null;
};
*/

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
    // console.log(root)
    if (root === p || root === q) return root;
    const LCAL = root.left ? lowestCommonAncestor(root.left, p, q) : null;
    const LCAR = root.right ? lowestCommonAncestor(root.right, p, q) : null;

    return (LCAL && LCAR) ? root : LCAL || LCAR

};
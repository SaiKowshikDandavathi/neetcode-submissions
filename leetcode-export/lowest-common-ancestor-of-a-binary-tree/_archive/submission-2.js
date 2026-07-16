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
    if (!root || root === p || root === q) return root;
    const LCAL = lowestCommonAncestor(root.left, p, q);
    const LCAR = lowestCommonAncestor(root.right, p, q);

    return (LCAL && LCAR) ? root : LCAL || LCAR

};
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
 * @return {boolean}
 */

var last = 0
var isValidBST = function(root) {
    last = -Infinity;
    return inorder(root);
};
function inorder(root){
    if(root === null)
        return true;
    if(!inorder(root.left))
        return false;
    if(root.val<=last)
        return false;
    else last = root.val;
    if(!inorder(root.right))
        return false;
    return true;
}

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - Correctness and complexity are fine: an in-order traversal of a
 *   valid BST is strictly increasing, so tracking the previous
 *   visited value (`last`) and comparing is O(n) time, O(h) space —
 *   optimal, and correctly resets `last = -Infinity` at the start of
 *   each call so repeated calls to `isValidBST` don't leak state
 *   between invocations.
 * - However, `last` is declared with `var` at module/file scope
 *   (line 14), not inside `isValidBST` or `inorder`. This is a real
 *   code-quality problem: it pollutes the outer scope, means
 *   `inorder` has a hidden dependency on external mutable state
 *   instead of being a pure function of its argument, and would be a
 *   correctness hazard the moment this code is reused in a context
 *   where `isValidBST` could be called re-entrantly (e.g. from
 *   within another `inorder` call) rather than sequentially.
 * - `inorder` is also declared as a free-standing function outside
 *   `isValidBST` rather than nested inside it, so it's part of the
 *   module's public-ish surface for no reason.
 *
 * Areas of improvement:
 * - Move `last` and `inorder` inside `isValidBST` as local variable
 *   and inner function so all state is properly scoped.
 * - Prefer explicit `-Infinity`/`Infinity` bounds passed down through
 *   recursion (min/max range approach) over shared mutable state —
 *   it's the same complexity but doesn't rely on traversal order for
 *   correctness, making it easier to reason about.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var isValidBST = function (root) {
    function isValidNode(node, low, high) {
        if (node === null) return true;
        if (node.val <= low || node.val >= high) return false;
        return isValidNode(node.left, low, node.val) &&
               isValidNode(node.right, node.val, high);
    }

    return isValidNode(root, -Infinity, Infinity);
};
*/
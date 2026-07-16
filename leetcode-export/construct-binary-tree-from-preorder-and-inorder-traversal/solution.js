/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

/**
* Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
* Output: [3,9,20,null,null,15,7]
 */
var buildTree = function (preorder, inorder) {
    let preOrderIndex = 0;
    const inOrderIndexMap = new Map();

    for (let i = 0; i < inorder.length; i++) {
        inOrderIndexMap.set(inorder[i], i)
    }

    function arrayToTree(left, right) {

        if (left > right) return null
        let rootValue = preorder[preOrderIndex++];
        const root = new TreeNode(rootValue);
        root.left = arrayToTree(left, inOrderIndexMap.get(rootValue) - 1);
        root.right = arrayToTree(inOrderIndexMap.get(rootValue) + 1, right);
        return root

    }

    return arrayToTree(0, preorder.length - 1)

};
/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Correct and optimal — O(n) time, O(n) space. Uses a `Map` for O(1)
 *   value-to-index lookups in `inorder` (instead of an O(n) `indexOf`
 *   scan per node, which would make the whole algorithm O(n^2)), and a
 *   single shared `preOrderIndex` pointer advanced across recursive calls
 *   to consume `preorder` left-to-right in the correct order.
 * - Correctly assumes/relies on unique values (a stated constraint for
 *   this problem) since `inOrderIndexMap` maps each value to a single
 *   index — worth a one-line comment noting that assumption.
 *
 * Areas of improvement:
 * - None of substance — this is a clean, idiomatic, optimal solution.
 *   Could add a short comment noting the "unique values" assumption from
 *   the problem constraints for future readers.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var buildTree = function (preorder, inorder) {
    let preIndex = 0;
    const inorderIndex = new Map();
    inorder.forEach((val, i) => inorderIndex.set(val, i));

    function build(left, right) {
        if (left > right) return null;

        const rootVal = preorder[preIndex++];
        const root = new TreeNode(rootVal);
        const mid = inorderIndex.get(rootVal);

        root.left = build(left, mid - 1);
        root.right = build(mid + 1, right);
        return root;
    }

    return build(0, preorder.length - 1);
};
*/

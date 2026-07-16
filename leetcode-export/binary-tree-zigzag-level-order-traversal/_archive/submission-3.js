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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {

    let map = new Map();

    if (!root) return []

    function traverse(root, height = 0) {
        let mapValues = map.get(height) || [];
        height % 2 !== 0 && mapValues.length
            ? mapValues.unshift(root.val)
            : mapValues.push(root.val);

        map.set(height, mapValues);

        if (root.left) {
            traverse(root.left, height + 1)
        }
        if (root.right) {
            traverse(root.right, height + 1)
        }

    }

    traverse(root);

    let result = [...map].map(e => e[1]);

    return [...map].map(e => e[1])

};
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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {

    let closetValue = Infinity;
    let closetNumber = Infinity;

    function dfs(cur){
        if(!cur) return
        if(cur.left){
            dfs(cur.left);
        }
        if(Math.abs(cur.val - target) < closetValue){
            closetValue = Math.abs(cur.val - target);
            closetNumber = cur.val;
        }
       
        if(cur.right){
            dfs(cur.right);
        }
    }
    dfs(root)

    return closetNumber
    
};
/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - Correct: full inorder DFS tracking the closest value seen so far with
 *   `closetValue`/`closetNumber`, updating with strict `<` so the first
 *   (leftmost/smallest) value wins ties — matches LeetCode's tie-breaking
 *   rule of preferring the smaller value. O(n) time, O(1) extra space
 *   (better than a sibling submission that collected all nodes into an
 *   array and sorted, which was O(n) space + O(n log n) time).
 * - Doesn't exploit the BST ordering property at all — visits every node
 *   via a full traversal, when the optimal approach uses binary search
 *   (compare target to node.val, descend left or right) for O(h) time,
 *   which is significantly better than O(n) on a balanced tree.
 * - Typos: `closetValue`/`closetNumber` should be `closestValue`/
 *   `closestNumber`.
 *
 * Areas of improvement:
 * - Use the BST property: at each node, if it's closer than the current
 *   best, update; then descend left if `target < node.val`, right
 *   otherwise — no need to visit both subtrees.
 * - Fix the "closet" -> "closest" typos.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var closestValue = function (root, target) {
    let closest = root.val;

    let node = root;
    while (node) {
        if (Math.abs(node.val - target) < Math.abs(closest - target)) {
            closest = node.val;
        }
        node = target < node.val ? node.left : node.right;
    }

    return closest;
};
*/

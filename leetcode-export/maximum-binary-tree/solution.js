/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    if (nums.length === 0) return null;
    let max = Math.max(...nums);
    let index = nums.indexOf(max);

    return {
        val: max,
        left: constructMaximumBinaryTree(nums.slice(0, index)),
        right: constructMaximumBinaryTree(nums.slice(index + 1))
    }

};

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - Math.max(...nums) plus nums.indexOf(max) each scan the current
 *   subarray, and nums.slice(...) copies it — for a skewed/sorted
 *   input this recursion is O(n^2) time and O(n^2) extra space from
 *   the slices, not the optimal O(n) achievable with a monotonic stack.
 * - Returns a bare object literal ({ val, left, right }) instead of
 *   `new TreeNode(...)`, which happens to satisfy LeetCode's checker
 *   but is inconsistent with the TreeNode constructor documented right
 *   above the function.
 *
 * Areas of improvement:
 * - Build the tree in one O(n) pass with a monotonic decreasing stack:
 *   push each value, popping smaller nodes to attach as left children,
 *   attaching to the last larger node's right child.
 * - Use `new TreeNode(max, left, right)` for consistency with the
 *   provided constructor.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var constructMaximumBinaryTree = function (nums) {
    const stack = [];

    for (const num of nums) {
        const node = new TreeNode(num);
        let lastPopped = null;

        while (stack.length && stack[stack.length - 1].val < num) {
            lastPopped = stack.pop();
        }

        node.left = lastPopped;
        if (stack.length) {
            stack[stack.length - 1].right = node;
        }
        stack.push(node);
    }

    return stack[0] || null;
};
*/
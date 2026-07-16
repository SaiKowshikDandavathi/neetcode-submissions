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
    if (!root) return []
    let res = new Map();

    function dfs(node, height = 0) {
        if (!node) return
        let cur = res.get(height) || []
        height % 2 === 0
            ? cur.push(node.val)
            : cur.unshift(node.val)
        res.set(height, cur)
        if (node.left) dfs(node.left, height + 1)
        if (node.right) dfs(node.right, height + 1)
    }

    dfs(root)
    return [...res].map(ele => ele[1])

};
/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Correct and efficient: single DFS pass, using `unshift` on odd depths
 *   and `push` on even depths to build each level's array in the right
 *   zigzag order without a separate reversal pass. O(n) time overall
 *   (note: `Array.unshift` is O(k) for a level of size k, so worst case a
 *   single very wide level costs O(k^2) for that level — a BFS-with-
 *   `reverse()`-per-level or building each level then reversing at the end
 *   would avoid that, but for typical/interview-sized trees this is a
 *   non-issue and the code is clean and correct).
 * - No dead code, no leftover console.log — cleanest of the sibling
 *   submissions for this problem (several others compute an unused
 *   `result` variable that's assigned but never used).
 *
 * Areas of improvement:
 * - For guaranteed O(n) regardless of level width, collect each level via
 *   `push` only and reverse the array once per odd level after collection
 *   (or use BFS and reverse alternate levels), avoiding repeated
 *   `unshift` calls.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var zigzagLevelOrder = function (root) {
    if (!root) return [];

    const result = [];
    let queue = [root];
    let leftToRight = true;

    while (queue.length) {
        const level = queue.map(node => node.val);
        result.push(leftToRight ? level : level.reverse());

        const next = [];
        for (const node of queue) {
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        }
        queue = next;
        leftToRight = !leftToRight;
    }

    return result;
};
*/

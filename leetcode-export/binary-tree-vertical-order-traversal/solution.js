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
var verticalOrder = function (root) {
    const res = new Map();

    function dfs(node, xindex, yindex) {

        if(!node) return [];
        const indexValue = res.get(xindex) || [];
        indexValue.push([node.val, yindex])
        res.set(xindex, indexValue);

        if (node.left) {
            dfs(node.left, xindex - 1, yindex - 1);
        }

        if (node.right) {
            dfs(node.right, xindex + 1, yindex - 1);
        }

    }

    dfs(root, 0, 0)
    const sortedRes = [...res].sort((a, b) => a[0] - b[0]).map(val => val[1]);

    const finalRes = []
    for (const res of sortedRes) {
        res.sort((a, b) => b[1] - a[1]);
        const val = res.map(e => e[0]);
        finalRes.push(val)
    }

    // console.log(finalRes)
    return finalRes

};


/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Correct: groups nodes by column (`xindex`) via DFS, then sorts columns
 *   left-to-right and, within each column, sorts by row (`yindex`,
 *   descending because `yindex` decreases going down) to recover top-to-
 *   bottom order for ties. O(n log n) overall from the sorts.
 * - Because this uses DFS (not BFS), nodes within the same column are NOT
 *   discovered in top-to-bottom order, which is why a secondary per-column
 *   sort by `yindex` is required — this adds complexity that a level-order
 *   BFS traversal (visiting nodes row-by-row) would avoid entirely, since
 *   BFS naturally produces top-to-bottom order per column for free.
 * - `for (const res of sortedRes)` shadows the outer `res` Map variable
 *   with a same-named loop variable — this doesn't cause a bug here (the
 *   outer `res` isn't used again after `sortedRes` is derived from it) but
 *   it's a confusing naming collision that could easily become a real bug
 *   under future edits.
 *
 * Areas of improvement:
 * - Rename the loop variable to avoid shadowing `res`.
 * - Consider switching to BFS with a `[node, col]` queue, which removes
 *   the need for the secondary within-column sort by row.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var verticalOrder = function (root) {
    if (!root) return [];

    const columns = new Map(); // col -> [val, val, ...] in top-to-bottom order
    let minCol = 0, maxCol = 0;
    const queue = [[root, 0]];

    while (queue.length) {
        const [node, col] = queue.shift();
        if (!columns.has(col)) columns.set(col, []);
        columns.get(col).push(node.val);
        minCol = Math.min(minCol, col);
        maxCol = Math.max(maxCol, col);

        if (node.left) queue.push([node.left, col - 1]);
        if (node.right) queue.push([node.right, col + 1]);
    }

    const result = [];
    for (let col = minCol; col <= maxCol; col++) {
        result.push(columns.get(col));
    }
    return result;
};
*/

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */


var cloneGraph = function (node) {
    const graph = {};
    let visited = {}

    function bfs(cur) {
        if (!cur) return cur
        if(!graph[cur.val]){
            graph[cur.val] = new _Node(cur.val)
            graph[cur.val].neighbors = cur.neighbors.map(bfs)
        }
        return graph[cur.val]
    }
    const res = bfs(node)
    console.log("return", res)

    return res

};
/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - Correct and optimal complexity — O(V + E) time and space, using a
 *   `graph` map from original node value to its clone to avoid infinite
 *   loops on cycles and to avoid re-cloning already-visited nodes.
 * - The inner helper is named `bfs` but it's actually a recursive
 *   DEPTH-first traversal (`cur.neighbors.map(bfs)` recurses into each
 *   neighbor immediately rather than processing level-by-level with a
 *   queue) — a misleading name that could confuse a reviewer or a future
 *   maintainer about the actual traversal strategy used.
 * - Leftover `console.log("return", res)` debug statement should be
 *   removed before an interview review.
 * - Declares an unused `visited` variable (`let visited = {}`) that's
 *   never read or written to — dead code; `graph` alone already serves as
 *   the visited-set/memo.
 * - Relies on `cur.val` as the uniqueness key for `graph`, which is only
 *   safe because this problem guarantees unique node values — worth a
 *   short comment, since keying by node identity would be more generally
 *   correct if that guarantee ever changed.
 *
 * Areas of improvement:
 * - Rename `bfs` to `dfs` (or `clone`) to match what it actually does.
 * - Remove the unused `visited` variable and the `console.log`.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var cloneGraph = function (node) {
    if (!node) return null;

    const cloned = new Map(); // original node -> cloned node

    function dfs(cur) {
        if (cloned.has(cur)) return cloned.get(cur);

        const copy = new _Node(cur.val);
        cloned.set(cur, copy);
        copy.neighbors = cur.neighbors.map(dfs);
        return copy;
    }

    return dfs(node);
};
*/

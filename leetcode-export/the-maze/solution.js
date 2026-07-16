/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function (maze, start, destination) {
    const visited = new Set();
    // left, right, down, up
    const directions = [[0, -1], [0, 1], [1, 0], [-1, 0]];
    const rowLen = maze.length;
    const colLen = maze[0].length;

    function dfs(x, y) {
        let key = `${x}-${y}`;
        if (visited.has(key)) return false;
        visited.add(key);
        if (x === destination[0] && y === destination[1]) return true;
        for (const [i, j] of directions) {
            let newX = x;
            let newY = y;
            while ((0 <= newX + i && newX + i < rowLen)
                && (0 <= newY + j && newY + j < colLen)
                && maze[newX + i][newY + j] != 1) {
                newX += i;
                newY += j;
            }
            if (dfs(newX, newY)) {
                return true
            };
        } return false
    }
    return dfs(...start)

};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct DFS-with-rolling-moves approach: from each stop point it
 *   rolls in each direction until hitting a wall or boundary, then
 *   recurses from that new stop point. The `visited` Set correctly
 *   prevents infinite loops/cycles between stop points, giving
 *   O(rows*cols) time in the worst case, which is optimal for this
 *   problem (BFS would be equally optimal; DFS here is a valid
 *   choice since the problem only needs reachability, not the
 *   shortest path).
 * - `maze[newX + i][newY + j] != 1` uses loose inequality (`!=`)
 *   instead of `!==`; harmless here since maze values are guaranteed
 *   numeric, but inconsistent with strict-equality best practice.
 * - String-concatenation keys (`` `${x}-${y}` ``) for the visited set
 *   work but are marginally slower than encoding the (x, y) pair as
 *   a single number (e.g. `x * colLen + y`).
 *
 * Areas of improvement:
 * - Use `!==` instead of `!=` for the wall check.
 * - Consider a numeric visited-key encoding for a small perf win on
 *   large mazes.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var hasPath = function (maze, start, destination) {
    const rows = maze.length;
    const cols = maze[0].length;
    const directions = [[0, -1], [0, 1], [1, 0], [-1, 0]];
    const visited = new Set();

    function roll(x, y, dx, dy) {
        while (
            x + dx >= 0 && x + dx < rows &&
            y + dy >= 0 && y + dy < cols &&
            maze[x + dx][y + dy] !== 1
        ) {
            x += dx;
            y += dy;
        }
        return [x, y];
    }

    function dfs(x, y) {
        const key = x * cols + y;
        if (visited.has(key)) return false;
        visited.add(key);
        if (x === destination[0] && y === destination[1]) return true;

        for (const [dx, dy] of directions) {
            const [stopX, stopY] = roll(x, y, dx, dy);
            if (dfs(stopX, stopY)) return true;
        }
        return false;
    }

    return dfs(start[0], start[1]);
};
*/
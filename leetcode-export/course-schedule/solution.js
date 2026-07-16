/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const order = []
    const queue = []
    const graph = new Map();
    const inDegree = Array(numCourses).fill(0);

    for (const [e, v] of prerequisites) {
        const preClassValue = graph.get(v) || [];
        preClassValue.push(e)
        graph.set(v, preClassValue)
        inDegree[e]++
    }


    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) queue.push(i)
    }

    while (queue.length) {
        const v = queue.shift();
        if (graph.has(v)) {
            for (const e of graph.get(v)) {
                inDegree[e]--;
                if (inDegree[e] === 0) queue.push(e)
            }
        }
        order.push(v)
    }


    return numCourses === order.length;

};

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Correct Kahn's-algorithm topological sort (BFS over in-degrees),
 *   which is the right approach for cycle detection here.
 * - `queue.shift()` on a plain JS array is O(n) per call because
 *   the engine has to re-index every remaining element, so the BFS
 *   loop is O(V^2) in the worst case rather than the optimal
 *   O(V + E). For `numCourses` at LeetCode's upper constraint this
 *   is a real (if often unnoticed) performance regression.
 * - Two blank lines (after the edge-building loop and before the
 *   return) are stray formatting noise.
 *
 * Areas of improvement:
 * - Replace the array-based queue with a read-index pointer (or an
 *   actual deque) so dequeuing is O(1), restoring true O(V + E).
 * - Trim the extra blank lines.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var canFinish = function (numCourses, prerequisites) {
    const graph = new Map();
    const inDegree = new Array(numCourses).fill(0);

    for (const [course, prereq] of prerequisites) {
        const neighbors = graph.get(prereq) || [];
        neighbors.push(course);
        graph.set(prereq, neighbors);
        inDegree[course]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    let visited = 0;
    let readIndex = 0;
    while (readIndex < queue.length) {
        const course = queue[readIndex++];
        visited++;
        for (const next of graph.get(course) || []) {
            if (--inDegree[next] === 0) queue.push(next);
        }
    }

    return visited === numCourses;
};
*/
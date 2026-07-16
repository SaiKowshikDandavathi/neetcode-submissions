/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const order = [];
    const indegree = new Array(numCourses).fill(0);
    const graph = new Map();
    const queue = [];

    for (const [classes, preclass] of prerequisites) {
        const preclassValue = graph.get(preclass) || [];
        preclassValue.push(classes);
        graph.set(preclass, preclassValue);
        indegree[classes]++;
    }

    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] === 0) queue.push(i)
    }
    // console.log("queue", queue)

    while (queue.length) {
        const v = queue.shift();
        if (graph.has(v)) {
            for (const e of graph.get(v)) {
                indegree[e]--;
                if (indegree[e] === 0) queue.push(e)
            }
        }
        order.push(v)
    }
    // console.log(order)
    return order.length === numCourses ? order : []

};

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - Same Kahn's-algorithm shape as course-schedule, and the same
 *   real flaw: `queue.shift()` is O(n) per dequeue on a JS array,
 *   making the BFS O(V^2) worst case instead of the optimal
 *   O(V + E).
 * - Two leftover commented-out `console.log` debug lines (lines 22
 *   and 34) are dead code that should have been removed.
 * - Variable names `classes`/`preclass` in the destructuring are
 *   swapped relative to how they read (`preclass` is actually the
 *   prerequisite, `classes` the dependent course) — a clearer name
 *   like `course`/`prereq` would remove the need to re-derive this
 *   from the `inDegree[classes]++` line.
 *
 * Areas of improvement:
 * - Use a read-index pointer instead of `shift()` for O(1) dequeue.
 * - Delete the dead console.log comments.
 * - Rename `classes`/`preclass` to `course`/`prereq`.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var findOrder = function (numCourses, prerequisites) {
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

    const order = [];
    let readIndex = 0;
    while (readIndex < queue.length) {
        const course = queue[readIndex++];
        order.push(course);
        for (const next of graph.get(course) || []) {
            if (--inDegree[next] === 0) queue.push(next);
        }
    }

    return order.length === numCourses ? order : [];
};
*/
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
    console.log(indegree)

    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] === 0) queue.push(i)
    }

    while (queue.length) {
        const v = queue.shift();
        if (graph.has(v)) {
            for (const e of graph.get(v)) {
                indegree[e]--;
                if (indegree[e] === 0) queue.push(e)
            }
        }
        order.push(v)
        // console.log(order)

    }
    return order.length === numCourses ? order : []

};
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    // adjacency list is not found for Judge
    // common edge for all the vertexs
    // Number that is the intersection of the trust

    // Build adjacency list
    let inDegree = Array.from({ length: n + 1 }).fill(0);
    let outDegree = Array.from({ length: n + 1 }).fill(0);

    for (const relation of trust) {
        console.log(relation)
        outDegree[relation[0]]++;
        inDegree[relation[1]]++;
    }
    // console.log(inDegree, outDegree)

    for (let i = 1; i <= n; i++) {
        if (inDegree[i] === n - 1 && outDegree[i] === 0) {
            return i
        }
    }

    return -1


};
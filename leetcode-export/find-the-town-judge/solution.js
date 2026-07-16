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
        // console.log(relation)
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

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Leftover commented-out debug lines (`// console.log(relation)` and
 *   `// console.log(inDegree, outDegree)`) are dead code that should
 *   be removed before this is considered interview-ready.
 * - The header comments ("adjacency list is not found for Judge",
 *   "common edge for all the vertexs") are scratch-pad thoughts rather
 *   than a clear explanation of the in-degree/out-degree approach —
 *   worth tightening for readability.
 *
 * Areas of improvement:
 * - Strip the dead console.log comments.
 * - Replace the stream-of-consciousness comments with one crisp line:
 *   "the judge is trusted by everyone else (in-degree n-1) and trusts
 *   no one (out-degree 0)".
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var findJudge = function (n, trust) {
    // The judge is trusted by everyone else (in-degree n - 1) and
    // trusts no one (out-degree 0). O(n + m) time, O(n) space.
    const inDegree = new Array(n + 1).fill(0);
    const outDegree = new Array(n + 1).fill(0);

    for (const [a, b] of trust) {
        outDegree[a]++;
        inDegree[b]++;
    }

    for (let person = 1; person <= n; person++) {
        if (inDegree[person] === n - 1 && outDegree[person] === 0) {
            return person;
        }
    }

    return -1;
};
*/
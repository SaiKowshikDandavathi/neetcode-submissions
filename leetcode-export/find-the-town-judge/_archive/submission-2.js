/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {

    const indegree = Array.from({ length: n + 1 }).fill(0);
    const outdegree = Array.from({ length: n + 1 }).fill(0);
    
    for(const relation of trust){
        outdegree[relation[0]]++;
        indegree[relation[1]]++;
    }
    console.log(indegree,outdegree)

    for(let i = 1; i <= n; i++){
        if(indegree[i] === n - 1 && outdegree[i]===0){
            return i
        }
    }
    return -1


};
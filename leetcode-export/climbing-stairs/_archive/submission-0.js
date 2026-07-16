/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const memo = new Array(45)
    memo[1] = 1
    memo[2] = 2
    memo[3] = 3

    function recurssion(n, memo) {
        if (memo[n]) return memo[n]
        const res = recurssion(n - 1,memo) + recurssion(n - 2,memo)
        memo[n] = res
        return res
    }
    return recurssion(n,memo)
};
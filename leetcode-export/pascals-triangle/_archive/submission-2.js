/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

    const dp = Array.from({ length: numRows }, (_, idx) => Array.from({ length: idx + 1 }).fill(1))

    for (let i = 2; i < numRows; i++) {

        const prev = dp[i - 1];
        let left = 0;
        let right = 1;

        for (let j = 1; j < dp[i].length - 1; j++) {
            dp[i][j] = Math.max((prev[left] || 0) + (prev[right] || 0), dp[i][j]);
            left++;
            right++
        }

    }
    // console.log(dp)
    return dp

};
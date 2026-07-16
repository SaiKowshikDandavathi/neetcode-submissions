/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const length1 = text1.length;
    const length2 = text2.length;
    let dp = Array.from({ length: length1 + 1 }, () => Array.from({ length: length2 + 1 }).fill(0))

    for (let i = 1; i <= length1; ++i) {
        for (let j = 1; j <= length2; ++j) {
            if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[length1][length2]

};
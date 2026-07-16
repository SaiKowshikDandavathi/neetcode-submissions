/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {

    const results = Array.from({ length: m }, () => Array.from({ length: n }).fill(0));
    results[m - 1][n - 1] = 1;

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (results[i][j]) continue
            let rightPath = j + 1 >= n ? 0 : results[i][j + 1];
            let downPath = i + 1 >= m ? 0 : results[i + 1][j];
            results[i][j] = rightPath + downPath;
        }
    }
    return results[0][0]
}

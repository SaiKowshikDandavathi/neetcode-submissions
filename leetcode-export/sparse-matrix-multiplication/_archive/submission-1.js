/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @return {number[][]}
 */
var multiply = function (mat1, mat2) {
    const n = mat1.length;
    const m = mat1[0].length;
    const k = mat2[0].length;

    const rowVectors = mat1.map((row, i) =>
        row.map((val, j) => [j, val]).filter(([j, val]) => val !== 0)
    );

    const colVectors = Array.from({ length: k }, (_, j) =>
        mat2.map((row, i) => [i, row[j]]).filter(([i, val]) => val !== 0)
    );

    return rowVectors.map(row =>
        colVectors.map(col => dotProduct(row, col))
    );

};

function dotProduct(vec1, vec2) {
    let p1 = 0, p2 = 0;
    let res = 0;

    while (p1 < vec1.length && p2 < vec2.length) {
        if (vec1[p1][0] < vec2[p2][0]) {
            p1++;
        } else if (vec1[p1][0] > vec2[p2][0]) {
            p2++;
        } else {
            res += vec1[p1][1] * vec2[p2][1];
            p1++;
            p2++;
        }
    }
    return res;
}
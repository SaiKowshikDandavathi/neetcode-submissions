/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @return {number[][]}
 */
var multiply = function (mat1, mat2) {

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

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - `const m = mat1[0].length;` on line 8 is computed but never used
 *   anywhere in the function — dead code that should be removed.
 * - This is the sparse-vector-list representation with a merge-style
 *   dotProduct, which is the standard optimal approach for sparse
 *   matrices (avoids the dense O(rows1*cols1*cols2) multiply blowing
 *   up on zero entries) — this is the right technique.
 *
 * Areas of improvement:
 * - Remove the unused `m` variable.
 * - Destructuring `([j, val])` and `([i, val])` inside the `.filter`
 *   callbacks shadows the outer `j`/`i` from `.map`, which works but
 *   is a minor readability trap — naming them differently (e.g.
 *   `_j`) would make the shadowing obvious at a glance.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var multiply = function (mat1, mat2) {
    const rows1 = mat1.length, cols1 = mat1[0].length, cols2 = mat2[0].length;

    const rowVectors = mat1.map(row =>
        row.reduce((acc, val, j) => {
            if (val !== 0) acc.push([j, val]);
            return acc;
        }, [])
    );

    const colVectors = Array.from({ length: cols2 }, (_, col) =>
        mat2.reduce((acc, row, i) => {
            if (row[col] !== 0) acc.push([i, row[col]]);
            return acc;
        }, [])
    );

    const result = Array.from({ length: rows1 }, () => Array(cols2).fill(0));

    for (let i = 0; i < rows1; i++) {
        for (let col = 0; col < cols2; col++) {
            let p1 = 0, p2 = 0;
            const rowVec = rowVectors[i], colVec = colVectors[col];
            while (p1 < rowVec.length && p2 < colVec.length) {
                if (rowVec[p1][0] < colVec[p2][0]) p1++;
                else if (rowVec[p1][0] > colVec[p2][0]) p2++;
                else {
                    result[i][col] += rowVec[p1][1] * colVec[p2][1];
                    p1++; p2++;
                }
            }
        }
    }

    return result;
};
*/
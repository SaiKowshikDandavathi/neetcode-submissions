/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    let map = new Map();
    for (const point of points) {
        const distance = calcDistance(point);
        map.set(point, distance);
    }
    let mapValues = [...map].sort((a, b) => a[1] - b[1]);
    let res =[];
    for (let i = 0; i < k; i++) {
        res.push(mapValues[i][0])
    }
    return res;

};

function calcDistance(a, b = [0, 0]) {
    return Math.sqrt(Math.pow(Math.abs(a[0] - b[0]), 2) + Math.pow(Math.abs(a[1] - b[1]), 2))
}
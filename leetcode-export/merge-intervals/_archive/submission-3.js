/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let prev = intervals[0];
    let res = [];
    let cur

    for (let i = 1; i < intervals.length; i++) {
        cur = intervals[i];
        if (cur[0] <= prev[1]) {
            prev = [prev[0], Math.max(cur[1], prev[1])]
        } else {
            res.push(prev);
            prev = cur
        }
    }
    res.push(prev)

    return res;

};
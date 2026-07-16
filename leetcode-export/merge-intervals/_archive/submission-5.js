/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    intervals = intervals.sort((a, b) => a[0] - b[0])

    let res = [];
    let prev = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i]
        if (prev[1] >= cur[0] || prev[0] >= cur[0]) {

            prev[0] = Math.min(prev[0], cur[0]);
            prev[1] = Math.max(prev[1], cur[1]);

        } else {
            res.push(prev);
            prev = cur;
        }
    }
    res.push(prev)
    return res

};
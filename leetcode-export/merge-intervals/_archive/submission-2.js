/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    /**
    If second element of first array is less than first element of next array then merge both of them
     */

    intervals.sort((a, b) => a[0] - b[0])
    let prev = intervals[0];
    let result = [];
    let cur
    for (let i = 1; i < intervals.length; i++) {
        cur = intervals[i]
        if (cur[0] <= prev[1]) {
            prev = [prev[0], Math.max(prev[1], cur[1])]
        } else {
            result.push(prev)
            prev = cur
        }

    } 
    result.push(prev)
    return result
};
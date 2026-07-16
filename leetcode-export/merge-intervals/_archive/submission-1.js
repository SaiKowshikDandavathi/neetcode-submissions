/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let sortedArray = intervals.sort((a, b) => a[0] - b[0]);
    /** 1st el of arr1 should be less than 1st el of array2
        2nd el of arr1 should be greater than 1st el of array2
     */
    let res = [];
    let prev = sortedArray[0];

    for (let i = 1; i < sortedArray.length; i++) {
        let cur = sortedArray[i];

        if (prev[0] <= cur[0] && prev[1] >= cur[0]) {
            let high = Math.max(prev[1], cur[1])
            prev = [prev[0], high]
        } else {
            res.push(prev)
            prev = cur
        }
    }
    res.push(prev)
    return res


};
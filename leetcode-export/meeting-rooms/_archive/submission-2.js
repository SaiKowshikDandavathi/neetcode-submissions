/**
 * @param {number[][]} intervals
 * @return {boolean}
 */


var canAttendMeetings = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    
    for (let i = 0; i < intervals.length - 1; i++) {
        let cur = intervals[i];
        let next = intervals[i + 1];
        if (cur[1] > next[0]) {
            return false
        }
    } return true

};

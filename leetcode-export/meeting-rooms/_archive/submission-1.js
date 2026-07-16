/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
    if (!intervals) return false
    let map = new Set();

    for (const interval of intervals) {
        let [start, end] = interval;
        if (map.has(start)) return false
        else {
            for (let i = start; i < end; i++) {
                if(!map.has(i))map.add(i)
                else return false
            }
        }
    } return true

};

/**
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
 */
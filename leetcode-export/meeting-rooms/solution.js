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
    }return true

};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct and optimal: sort by start time then check consecutive
 *   pairs for overlap, O(n log n) time, O(1) extra space (ignoring
 *   sort's own space). Handles empty input and single-meeting input
 *   correctly since the loop simply doesn't execute.
 * - `intervals.sort(...)` mutates the caller's array — a minor smell,
 *   though harmless for LeetCode's single-call harness.
 *
 * Areas of improvement:
 * - Sort a copy (`[...intervals].sort(...)`) rather than mutating the
 *   input if this were library code.
 * - Variable names `cur`/`next` are fine but could be `intervals[i]`
 *   destructured directly for slightly fewer lines.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var canAttendMeetings = function (intervals) {
    const sorted = [...intervals].sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i - 1][1] > sorted[i][0]) {
            return false;
        }
    }
    return true;
};
*/
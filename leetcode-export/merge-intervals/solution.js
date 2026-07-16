/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (!intervals.length) return [];
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let prev = intervals[0];
    let res = [];

    for (const interval of intervals) {

        if (interval[0] <= prev[1]) {
            prev[0] = Math.min(prev[0], interval[0]);
            prev[1] = Math.max(prev[1], interval[1]);
        } else {
            res.push(prev);
            prev = interval;
        }
    }
    res.push(prev);

    return res;

};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct and optimal: sort by start then sweep, O(n log n) time,
 *   O(n) output space. Correctly guards the empty-array edge case.
 * - `prev = intervals[0]` followed by `for (const interval of
 *   intervals)` means the loop compares `intervals[0]` against
 *   itself on the first iteration (`interval[0] <= prev[1]` is always
 *   true there). It's harmless — `Math.min`/`Math.max` against itself
 *   is a no-op — but it's a redundant iteration that's easy to trip
 *   over when reading the code.
 * - Mutates the input array via `.sort()`.
 *
 * Areas of improvement:
 * - Start the loop at index 1 (`for (let i = 1; ...)`) instead of
 *   re-processing `intervals[0]`, to make the sweep's intent obvious.
 * - Sort a copy instead of the original array if reuse of the input
 *   matters.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var merge = function (intervals) {
    if (!intervals.length) return [];

    const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
    const res = [sorted[0]];

    for (let i = 1; i < sorted.length; i++) {
        const last = res[res.length - 1];
        const cur = sorted[i];

        if (cur[0] <= last[1]) {
            last[1] = Math.max(last[1], cur[1]);
        } else {
            res.push(cur);
        }
    }

    return res;
};
*/
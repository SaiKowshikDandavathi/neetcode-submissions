/**
 * @param {number[]} heights
 * @return {number[]}
 */

/**
    If we go from the order from ocean, result has to be sorted

 */
var findBuildings = function (heights) {

    if (heights.length === 0) return [];
    let maxHeight = 0;
    let res = [];

    for (let i = heights.length - 1; i >= 0; i--) {

        if (heights[i] > maxHeight) {
            res.push(i)
        }
        maxHeight = Math.max(maxHeight, heights[i]);
    }

    return res.sort((a, b) => a - b);

};
/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Correct: scans right-to-left tracking the max height seen so far, and
 *   any building taller than everything to its right has an ocean view.
 *   O(n) traversal, O(k) result for k qualifying buildings.
 * - Ends with `res.sort((a, b) => a - b)`, an O(k log k) sort — but since
 *   the right-to-left scan already discovers qualifying indices in
 *   strictly DECREASING order, a plain `res.reverse()` (O(k)) would
 *   produce the same ascending-index result without any comparison sort.
 *   In the worst case (strictly decreasing heights) k = n, so this is an
 *   avoidable O(n log n) vs. O(n) difference.
 * - Explicit `heights.length === 0` guard is technically redundant (the
 *   loop and `.sort()` on an empty array both degrade gracefully to `[]`)
 *   but it's harmless and arguably improves readability.
 *
 * Areas of improvement:
 * - Replace `.sort((a, b) => a - b)` with `.reverse()` since `res` is
 *   already produced in descending index order.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var findBuildings = function (heights) {
    let maxHeight = 0;
    const res = [];

    for (let i = heights.length - 1; i >= 0; i--) {
        if (heights[i] > maxHeight) {
            res.push(i);
            maxHeight = heights[i];
        }
    }

    return res.reverse();
};
*/

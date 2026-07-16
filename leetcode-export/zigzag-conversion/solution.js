/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let res = new Map();
    s = s.split("");
    let cur = 0;
    let decrement = false;

    for (let i = 0; i < s.length; i++) {
        let resValue = res.get(cur) || [];
        resValue.push(s[i]);
        res.set(cur, resValue);
        if (cur + 1 === numRows) {
            decrement = true;
        } else if (cur === 0) {
            decrement = false
        }
        decrement ? cur-- : cur++
    }
    let valuesInMap = res.values().reduce((acc, curArray) => acc.concat(curArray), [])

    return valuesInMap.join("")
};

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - `res.values().reduce(...)` on line 23 calls `.reduce` directly on
 *   a `Map` iterator. That only works because of the relatively new
 *   "Iterator Helpers" proposal (`Iterator.prototype.reduce`), which
 *   is only available in recent JS engine versions (modern V8 /
 *   Node 22+). On an older Node/browser runtime this throws
 *   `TypeError: res.values().reduce is not a function`. Relying on
 *   this instead of `[...res.values()]` or `Array.from(res.values())`
 *   makes the solution non-portable across environments.
 * - `cur` isn't clamped for `numRows === 1`: when a row bounces off
 *   the last row (`cur + 1 === numRows`) it flips `decrement = true`
 *   and immediately decrements `cur` to `-1`, `-2`, etc. (since
 *   `cur === 0` never becomes true again to reset the direction).
 *   The output still happens to be correct only because each
 *   negative `cur` is a fresh, never-reused Map key inserted in
 *   traversal order, so the final concatenation order matches the
 *   input by coincidence — this is fragile and not an intentional
 *   `numRows === 1` handling.
 * - Using a `Map` keyed by row index plus a bounce flag is more
 *   moving parts than necessary; the standard technique tracks the
 *   current row and direction and appends directly into an array of
 *   `numRows` string buffers.
 *
 * Areas of improvement:
 * - Replace `res.values().reduce(...)` with `Array.from(res.values())
 *   .reduce(...)` (or a plain `for...of`) so it doesn't depend on
 *   Iterator Helpers being available.
 * - Handle `numRows <= 1` as an explicit early return of `s`.
 * - Use `numRows` fixed-size string buffers and a `+1`/`-1` direction
 *   flip instead of a Map with possibly-negative keys.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var convert = function (s, numRows) {
    if (numRows <= 1 || numRows >= s.length) return s;

    const rows = Array.from({ length: numRows }, () => "");
    let row = 0;
    let direction = -1;

    for (const ch of s) {
        rows[row] += ch;
        if (row === 0 || row === numRows - 1) direction *= -1;
        row += direction;
    }

    return rows.join("");
};
*/
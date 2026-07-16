/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let open = 0
    let close = 0;

    for (let char of s) {
        if (char === "(") open++
        else if (!open) close++
        else open--
    }


    return open + close

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Correct and optimal: single O(n) pass, O(1) space. `open` tracks
 *   unmatched `(` still needing a `)`, and `close` counts `)` that
 *   have no `(` to match, so `open + close` is exactly the minimum
 *   insertions needed. Handles empty string (loop doesn't run,
 *   returns 0) correctly.
 * - Minor nit: naming `open`/`close` for "unmatched opens" and
 *   "unmatched closes" is reasonable but could be slightly more
 *   explicit (e.g. `unmatchedOpen`/`unmatchedClose`) since they don't
 *   literally count all opens/closes in the string.
 *
 * Areas of improvement:
 * - Purely cosmetic naming tweak; algorithm is already ideal.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var minAddToMakeValid = function (s) {
    let unmatchedOpen = 0;
    let insertionsNeeded = 0;

    for (const char of s) {
        if (char === "(") {
            unmatchedOpen++;
        } else if (unmatchedOpen > 0) {
            unmatchedOpen--;
        } else {
            insertionsNeeded++;
        }
    }

    return unmatchedOpen + insertionsNeeded;
};
*/
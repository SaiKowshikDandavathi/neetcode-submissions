/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = [];

    function makeCombinations(current, leftCounter, rightCounter) {
        if (current.length === 2 * n) res.push(current);
        if (leftCounter < n) makeCombinations(current + "(", leftCounter + 1, rightCounter)
        if (rightCounter < leftCounter) makeCombinations(current + ")", leftCounter, rightCounter + 1)
    }
    makeCombinations("", 0, 0)

    console.log(res)
    return res

};

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - `console.log(res)` is a leftover debug statement shipped in the
 *   final submission — it doesn't affect correctness but is dead
 *   instrumentation that shouldn't be in interview-ready code.
 * - After `res.push(current)` when a full combination is found, the
 *   function doesn't `return` — it happens to be harmless here because
 *   `leftCounter < n` and `rightCounter < leftCounter` are both false
 *   once `current.length === 2 * n`, but relying on that invariant
 *   instead of an explicit `return` makes the base case fragile to
 *   future edits.
 * - Backtracking is otherwise correct and already the standard
 *   optimal approach: it only explores valid prefixes, giving the
 *   tight O(4^n / sqrt(n)) (Catalan number) bound rather than
 *   generating-then-filtering all 2^(2n) sequences.
 *
 * Areas of improvement:
 * - Remove the `console.log`.
 * - Add an explicit `return` right after the base-case push for
 *   clarity and safety.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var generateParenthesis = function (n) {
    const result = [];

    // Backtracking: only add '(' while we still have some left to use,
    // only add ')' while it wouldn't outnumber '(' so far. This visits
    // exactly the valid combinations — O(4^n / sqrt(n)) time.
    function backtrack(current, openCount, closeCount) {
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }
        if (openCount < n) {
            backtrack(current + "(", openCount + 1, closeCount);
        }
        if (closeCount < openCount) {
            backtrack(current + ")", openCount, closeCount + 1);
        }
    }

    backtrack("", 0, 0);
    return result;
};
*/
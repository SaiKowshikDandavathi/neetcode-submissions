/**
 * @param {string} s
 * @return {string}
 */

/**
 * have a counter to check
 * have a max letter (k) to replace the strings in place
 */
var makeFancyString = function (s) {
    if (!s) return null
    let count = 1;
    let prev = s[0];
    let newValue = s[0];

    for (let i = 1; i < s.length; i++) {
        let cur = s[i];
        if (cur === prev) ++count;
        else count = 1;

        if (count <= 2) {
            newValue += cur;
        }
        prev = cur;
    }
    return newValue
};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - `if (!s) return null` returns `null` for an empty string
 *   instead of `""`, which doesn't match the function's declared
 *   `{string}` return type. LeetCode's constraints guarantee
 *   `s.length >= 1` so it never triggers in practice, but it's a
 *   latent type-correctness issue.
 * - `newValue += cur` rebuilds a string via repeated concatenation;
 *   fine at LeetCode's input sizes and V8 handles this well, but
 *   an array + `join('')` (or a single-pass character-count/regex
 *   approach) is the more scalable idiom for larger inputs.
 * - Correct O(n) time, O(n) space single pass — this is already
 *   the optimal algorithmic approach for the problem.
 *
 * Areas of improvement:
 * - Return `""` instead of `null` for the empty-input guard, or
 *   drop the guard entirely since the loop already handles it
 *   gracefully (returns `s[0]` alone, i.e. `s` unchanged).
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var makeFancyString = function (s) {
    if (s.length === 0) return "";

    let result = s[0];
    let runLength = 1;

    for (let i = 1; i < s.length; i++) {
        runLength = s[i] === s[i - 1] ? runLength + 1 : 1;
        if (runLength <= 2) result += s[i];
    }

    return result;
};
*/
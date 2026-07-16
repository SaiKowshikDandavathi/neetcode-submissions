/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    /**
        Problem is to return the prefix(first letters that are common)
        Consider the first element as the answer, then compare it to the next element
        Decrement the answer(prefix) by comparing the two elements
        Repeat for all the strings in array
        return the prefix
     */

    let prefix = strs[0];
    let prefix_len = prefix.length
    let cur;

    for (let i = 1; i < strs.length; i++) {
        cur = strs[i]
        // console.log(cur.substring(0, prefix_len))
        while (prefix !== cur.substring(0, prefix_len)) {
            prefix_len--
            if (prefix_len === 0) {
                return ""
            }
            prefix = prefix.substring(0, prefix_len)
        }
    } return prefix


};

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - No guard for `strs.length === 0`: `strs[0]` is `undefined`, and
 *   `prefix.length` on the next line throws a `TypeError`. Worth
 *   defending against even though LeetCode's constraints guarantee at
 *   least one string.
 * - Leftover commented-out debug line
 *   (`// console.log(cur.substring(0, prefix_len))`).
 * - Repeatedly calling `cur.substring(0, prefix_len)` inside the
 *   `while` loop recomputes the same substring on every shrink; fine
 *   at this input size, but a character-by-character comparison avoids
 *   the repeated substring allocation.
 * - Algorithmically this is the standard horizontal-scan approach:
 *   O(n*m) time (n = number of strings, m = shortest string length)
 *   in the worst case, O(1) extra space beyond the prefix itself —
 *   appropriately optimal for this problem.
 *
 * Areas of improvement:
 * - Add an `if (strs.length === 0) return ""` guard.
 * - Remove the dead commented console.log.
 * - Optionally switch to vertical character-by-character scanning to
 *   avoid repeated substring allocation, though it's a minor
 *   optimization at these input sizes.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";

    // Vertical scan: compare one character position at a time across
    // all strings, stopping at the first mismatch or shortest string.
    // O(n*m) worst case, O(1) extra space.
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i === strs[j].length || strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }

    return strs[0];
};
*/
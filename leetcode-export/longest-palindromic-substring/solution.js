/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (str) {
    let res = ""
    let resLen = 0;
    let left = 0;
    let right = 0;

    for (let i = 0; i < str.length; i++) {

        left = i;
        right = i;

        while (left >= 0 && right < str.length && str[left] == str[right]) {
            if (right - left + 1 > resLen) {
                resLen = right - left + 1;
                res = str.substring(left, right + 1)
            }
            left--;
            right++;
        }


        left = i, right = i + 1

        while (left >= 0 && right < str.length && str[left] == str[right]) {
            if (right - left + 1 > resLen) {
                resLen = right - left + 1;
                res = str.substring(left, right + 1)
            }
            left--;
            right++;
        }


    }

    return res
};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - The odd-length and even-length expansion blocks are near-identical
 *   duplicated code (same while loop body, only the initial `left`/
 *   `right` differ) — a small `expandFromCenter(left, right)` helper
 *   would remove the duplication without changing behavior.
 * - Parameter is named `str` while the JSDoc above documents `s` —
 *   harmless but an inconsistency worth cleaning up.
 * - Uses `==` instead of `===` for the character comparison
 *   (`str[left] == str[right]`); harmless here since both sides are
 *   always strings, but inconsistent with strict-equality style used
 *   elsewhere.
 * - Algorithmically this is expand-around-center: O(n^2) time, O(1)
 *   extra space — the standard optimal non-Manacher solution for this
 *   problem, correctly implemented.
 *
 * Areas of improvement:
 * - Extract a shared `expandFromCenter(left, right)` helper to
 *   deduplicate the odd/even expansion logic.
 * - Rename the parameter to `s` to match the JSDoc, and use `===`.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var longestPalindrome = function (s) {
    let start = 0;
    let maxLen = 0;

    // Expand around every center (both odd-length, single character,
    // and even-length, between two characters). O(n^2) time, O(1) space.
    function expandFromCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {
        const oddLen = expandFromCenter(i, i);
        const evenLen = expandFromCenter(i, i + 1);
        const len = Math.max(oddLen, evenLen);

        if (len > maxLen) {
            maxLen = len;
            start = i - Math.floor((len - 1) / 2);
        }
    }

    return s.substring(start, start + maxLen);
};
*/
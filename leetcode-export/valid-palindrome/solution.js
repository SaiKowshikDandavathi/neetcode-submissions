/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const regex = /[^0-9a-zA-Z]/g
    const fs = s.replace(regex, '').toLowerCase()

    let start = 0
    let end = fs.length - 1;

    while (start <= end) {
        if (fs[start] === fs[end]) {
            start++
            end--
        } else {
            return false
        }
    } return true

};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct and readable: strips non-alphanumeric characters with a
 *   regex, lowercases, then two-pointer compares. O(n) time.
 * - Space is O(n) because `s.replace(...)` allocates a new cleaned
 *   string `fs` before the two-pointer scan. The truly optimal
 *   version skips non-alphanumeric characters in place on the
 *   original string with the two pointers, achieving O(1) extra
 *   space — a real, concrete improvement over this version.
 *
 * Areas of improvement:
 * - Two-pointer directly over the original `s`, skipping non-
 *   alphanumeric characters with `while` loops on each pointer
 *   instead of pre-building `fs`, to drop space to O(1).
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var isPalindrome = function (s) {
    const isAlphanumeric = (ch) => /[a-z0-9]/i.test(ch);

    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        while (start < end && !isAlphanumeric(s[start])) start++;
        while (start < end && !isAlphanumeric(s[end])) end--;

        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        }
        start++;
        end--;
    }

    return true;
};
*/
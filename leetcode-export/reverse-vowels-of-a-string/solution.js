/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    s = s.split("")
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !vowels.has(s[left])) {
            left++;
        }
        while (left < right && !vowels.has(s[right])) {
            right--;
        }
        [s[left], s[right]] = [s[right], s[left]]
        left++;
        right--
    }
    return s.join("")
};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - The `vowels` Set is rebuilt on every call to `reverseVowels`; since it
 *   never changes, it could be hoisted to module scope to avoid
 *   reconstructing it each invocation (minor, no asymptotic impact for a
 *   single call).
 *
 * Areas of improvement:
 * - Hoist the vowel `Set` outside the function if this were called
 *   repeatedly.
 * - Already optimal: O(n) time, O(n) space (required due to string
 *   immutability), correct two-pointer skip-and-swap logic with proper
 *   `left < right` guards inside both inner while loops to avoid
 *   overrunning.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
const VOWELS = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

var reverseVowels = function (s) {
    const chars = s.split("");
    let left = 0;
    let right = chars.length - 1;

    while (left < right) {
        while (left < right && !VOWELS.has(chars[left])) left++;
        while (left < right && !VOWELS.has(chars[right])) right--;
        [chars[left], chars[right]] = [chars[right], chars[left]];
        left++;
        right--;
    }

    return chars.join("");
};
*/
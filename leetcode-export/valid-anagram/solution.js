/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (!s || !t || s.length !== t.length) return false
    let sMap = new Map();
    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    }

    for (let j = 0; j < t.length; j++) {
        let cur = t[j];
        if (sMap.has(cur)) {
            sMap.set(cur, sMap.get(cur) - 1);
            if (sMap.get(cur) === 0) sMap.delete(cur);
        } else {
            return false
        }
    }
    return sMap.size === 0

};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct O(n) hashmap frequency-count approach: builds counts
 *   from `s`, decrements/deletes while scanning `t`, and the early
 *   `s.length !== t.length` guard plus the final `sMap.size === 0`
 *   check together correctly rule out both length mismatches and
 *   character-frequency mismatches.
 * - `if (!s || !t || ...)` treats an empty string as falsy and
 *   returns `false` — under LeetCode's constraint (1 <= s.length)
 *   this never triggers, but it's logically inconsistent: two empty
 *   strings ("" and "") ARE anagrams of each other, so this guard
 *   would incorrectly return `false` if ever called with empty input.
 * - `sMap.size === 0` after the length check is slightly redundant
 *   (if lengths match and every char in `t` decremented something in
 *   the map without going negative, size 0 is guaranteed) but it's a
 *   harmless, cheap safety net rather than genuine waste.
 *
 * Areas of improvement:
 * - Replace `!s || !t` with an explicit `s == null || t == null` (or
 *   drop it entirely) so empty strings aren't misclassified.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const counts = new Map();
    for (const ch of s) {
        counts.set(ch, (counts.get(ch) || 0) + 1);
    }

    for (const ch of t) {
        const remaining = counts.get(ch);
        if (!remaining) return false;
        counts.set(ch, remaining - 1);
    }

    return true;
};
*/
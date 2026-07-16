/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let magHash = {};
    for (let char of magazine) {
        magHash[char] = magHash[char] ? magHash[char] + 1 : 1;
    }

    for (let char of ransomNote) {
        if (magHash[char]) {
            magHash[char] = magHash[char] - 1;
        } else {
            return false
        }
    }
    return true

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Uses a plain object (`magHash`) as a counter instead of a `Map`; works
 *   fine for character keys but a `Map` avoids prototype-pollution edge
 *   cases and is the more idiomatic counter structure in modern JS.
 *
 * Areas of improvement:
 * - Swap `{}` for `new Map()` for a more robust counter.
 * - Otherwise optimal: O(n + m) time, O(k) space where k is the alphabet
 *   size, early-exits as soon as a character can't be constructed.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var canConstruct = function (ransomNote, magazine) {
    const counts = new Map();
    for (const char of magazine) {
        counts.set(char, (counts.get(char) || 0) + 1);
    }

    for (const char of ransomNote) {
        const remaining = counts.get(char) || 0;
        if (remaining === 0) return false;
        counts.set(char, remaining - 1);
    }

    return true;
};
*/
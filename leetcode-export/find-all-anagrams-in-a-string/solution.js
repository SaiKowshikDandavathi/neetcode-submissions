/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    if (!s || !p || s.length < p.length) return [];
    let pCount = new Map();
    let sCount = new Map();
    let result = [];

    for (let j = 0; j < p.length; j++) {
        pCount.set(p[j], (pCount.get(p[j]) || 0) + 1);
        sCount.set(s[j], (sCount.get(s[j]) || 0) + 1);
    }

    if (areMapsEqual(pCount, sCount)) result.push(0);

    for (let i = p.length; i < s.length; i++) {
        let cur = s[i];
        let removedChar = s[i - p.length];

        sCount.set(removedChar, sCount.get(removedChar) - 1);
        if (sCount.get(removedChar) === 0) sCount.delete(removedChar);

        sCount.set(cur, (sCount.get(cur) || 0) + 1);

        if (areMapsEqual(pCount, sCount)) {
            result.push(i - p.length + 1)
        }
    }
    return result

};

function areMapsEqual(map1, map2) {

    if (map1.size != map2.size) {
        return false
    }

    for (let [key, value] of map1) {
        if (!map2.has(key) || map2.get(key) != value) {
            return false
        }
    }

    return true

}

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct sliding-window frequency comparison, O(n) windows over
 *   `s`. But each window calls `areMapsEqual`, which does up to
 *   O(26) work comparing map entries — since the alphabet is
 *   bounded (26 lowercase letters), this is still O(n) overall, but
 *   it's less efficient than tracking a single running `matches`
 *   counter that increments/decrements as characters enter/leave
 *   the window, which would avoid the per-window full-map
 *   comparison entirely.
 * - `Map` objects carry more overhead than a fixed-size 26-element
 *   array for lowercase-only inputs, which is the common case for
 *   this problem — an array-based frequency count is typically
 *   faster in practice.
 *
 * Areas of improvement:
 * - Replace the map-equality check with a single integer counter
 *   tracking how many character frequencies currently match
 *   between `p` and the window, updated incrementally.
 * - Consider fixed-size arrays instead of `Map` for character
 *   counts given the lowercase-English-letters constraint.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var findAnagrams = function (s, p) {
    if (s.length < p.length) return [];

    const need = new Array(26).fill(0);
    const window = new Array(26).fill(0);
    const a = 'a'.charCodeAt(0);

    for (let i = 0; i < p.length; i++) {
        need[p.charCodeAt(i) - a]++;
        window[s.charCodeAt(i) - a]++;
    }

    // Track how many of the 26 letter-counts currently agree.
    let matches = 0;
    for (let idx = 0; idx < 26; idx++) {
        if (need[idx] === window[idx]) matches++;
    }

    const result = [];
    if (matches === 26) result.push(0);

    for (let i = p.length; i < s.length; i++) {
        const enter = s.charCodeAt(i) - a;
        const leave = s.charCodeAt(i - p.length) - a;

        if (window[enter] === need[enter]) matches--;
        window[enter]++;
        if (window[enter] === need[enter]) matches++;

        if (window[leave] === need[leave]) matches--;
        window[leave]--;
        if (window[leave] === need[leave]) matches++;

        if (matches === 26) result.push(i - p.length + 1);
    }

    return result;
};
*/

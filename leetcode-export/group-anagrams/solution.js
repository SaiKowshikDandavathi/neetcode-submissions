/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/**
   can sort the characters in array element and compare
 */
var groupAnagrams = function (strs) {
    const hmap = new Map();

    for (let str of strs) {
        const key = str.split("").sort().join("");
        if (!hmap.has(key)) hmap.set(key, []);
        let val = hmap.get(key)
        val.push(str)
        hmap.set(key, val)
    }
    return Array.from(hmap.values())

};

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - The grouping key is built via `str.split("").sort().join("")`,
 *   which is O(k log k) per string (k = string length). Since strings
 *   only contain lowercase letters, a 26-length character-count key
 *   (e.g. "a2b1c0...") can be built in O(k), making the whole
 *   algorithm O(n*k) instead of O(n*k log k).
 * - `let val = hmap.get(key); val.push(str); hmap.set(key, val)` is
 *   three lines to do what `hmap.get(key).push(str)` does in one —
 *   since JS Map values holding arrays are mutated in place, the
 *   re-`set` is redundant.
 *
 * Areas of improvement:
 * - Switch to a counting-sort-style key for O(n*k) total time.
 * - Simplify to `hmap.get(key).push(str)` and drop the redundant
 *   `hmap.set(key, val)`.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var groupAnagrams = function (strs) {
    // Character-count key avoids sorting: O(k) per string instead of
    // O(k log k), giving O(n*k) total instead of O(n*k log k).
    const groups = new Map();

    for (const str of strs) {
        const counts = new Array(26).fill(0);
        for (const ch of str) counts[ch.charCodeAt(0) - 97]++;
        const key = counts.join(",");

        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(str);
    }

    return Array.from(groups.values());
};
*/
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {

    const hmap = {};

    for (let i = 0; i < order.length; i++) {
        hmap[order.charCodeAt(i)] = i;
    }
    let cur;
    let next;
    for (let j = 0; j < words.length - 1; j++) {
        cur = words[j];
        next = words[j + 1];
        for (let k = 0; k < cur.length; k++) {
            // check if cur word length is greater than cur + 1, if true return false
            // if cur letter is not equal to letter of same index in next word, check the order and determine result
            // if cur letter is same as index of same letter, continue
            // if (cur.length > next.length) return false
            if (cur[k] === next[k]) continue;
            if (cur[k] !== next[k]) {
                if (hmap[cur.charCodeAt(k)] > (hmap[next.charCodeAt(k)] || -1)) {
                    return false;
                }
                else {
                    break;
                }
            }

        }

    } return true;

};

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Overall approach (build a char -> rank map from `order`, then
 *   compare each adjacent word pair) is optimal — O(total chars)
 *   time, O(1) extra space for the 26-letter map.
 * - The explicit prefix-length check is commented out on line 22
 *   (`// if (cur.length > next.length) return false`), which is the
 *   standard guard for the case where `cur` is longer than `next`
 *   but `next` is a proper prefix of `cur` (e.g. ["apple", "app"],
 *   which is NOT sorted correctly and must return false). The code
 *   still happens to get this right, but only because
 *   `next.charCodeAt(k)` returns `NaN` when `k` is out of bounds for
 *   `next`, `hmap[NaN]` is `undefined`, and `undefined || -1`
 *   falls back to `-1` — a valid rank always beats `-1`, so the
 *   `> -1` check trips correctly by accident. Relying on this chain
 *   of implicit coercions instead of an explicit length check is
 *   fragile and hard to verify by reading — worth calling out even
 *   though it happens to produce the right answer.
 * - The redundant `if (cur[k] === next[k]) continue;` followed by
 *   `if (cur[k] !== next[k]) {...}` is really just an if/else — the
 *   second condition is always true given the first didn't match.
 *
 * Areas of improvement:
 * - Uncomment and use the explicit `if (cur.length > next.length &&
 *   isPrefix) return false;` check instead of relying on NaN
 *   coercion — much clearer intent.
 * - Collapse the `continue` / `if (cur[k] !== next[k])` pair into a
 *   single `if/else`.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var isAlienSorted = function (words, order) {
    const rank = {};
    for (let i = 0; i < order.length; i++) {
        rank[order[i]] = i;
    }

    function inOrder(a, b) {
        const minLen = Math.min(a.length, b.length);
        for (let k = 0; k < minLen; k++) {
            if (a[k] !== b[k]) {
                return rank[a[k]] < rank[b[k]];
            }
        }
        // All shared characters matched; shorter word must come first.
        return a.length <= b.length;
    }

    for (let i = 0; i < words.length - 1; i++) {
        if (!inOrder(words[i], words[i + 1])) return false;
    }
    return true;
};
*/
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */

/**
       Create a hashmap of the second string s
       Loop through the str 1 and push the elements into result
       If there are still strings in the hashmap, append them at last
 */
var customSortString = function (order, s) {
    const hmap = new Map();
    let res = ''

    for (let i = 0; i < s.length; i++) {
        hmap.set(s[i], (hmap.get(s[i]) || 0) + 1)
    }

    for (let j = 0; j < order.length; j++) {
        if (!hmap.has(order[j])) continue
        // if (hmap.get(order[j]) > 0) {
        //     res.push(order[j])
        //     hmap.set(order[j], hmap.get(order[j]) - 1)
        // }

        res += order[j].repeat(hmap.get(order[j]))
        hmap.delete(order[j])
    }

    for (let [key, value] of hmap) {
        res += key.repeat(value)
        hmap.delete(key)
    }
    return res
};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Lines 22-25 are a dead, commented-out earlier attempt (using
 *   `.push` on a string, which wouldn't even have worked) left
 *   next to the working `repeat()` line — should have been deleted.
 * - `hmap.delete(key)` inside the final `for...of hmap` loop while
 *   iterating over the same map works in JS (deleting the current
 *   key mid-iteration is safe) but is unnecessary — the map is
 *   discarded right after the loop, so the deletes add no value.
 * - Correct and already optimal: O(|s| + |order|) time, O(26)
 *   space for the character counts, single pass over each string.
 *
 * Areas of improvement:
 * - Remove the dead commented-out block.
 * - Drop the redundant `hmap.delete(key)` calls in the final loop.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var customSortString = function (order, s) {
    const counts = new Map();
    for (const ch of s) {
        counts.set(ch, (counts.get(ch) || 0) + 1);
    }

    let res = '';
    for (const ch of order) {
        if (counts.has(ch)) {
            res += ch.repeat(counts.get(ch));
            counts.delete(ch);
        }
    }

    for (const [ch, count] of counts) {
        res += ch.repeat(count);
    }

    return res;
};
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = new Set();
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.add(s[i])
        } else {
            while (map.has(s[i])) {
                map.delete(map.values().next().value)
            }
            map.add(s[i])
        }
        maxLength = Math.max(maxLength, map.size)
    }

    return maxLength

};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct and already O(n): although the inner `while
 *   (map.has(s[i]))` loop looks like it could add extra work, each
 *   character is inserted into and deleted from the `Set` at most
 *   once across the entire run, so the total work stays O(n) — good.
 * - Relies on `Set` insertion order and `map.values().next().value` to
 *   find "the oldest character still in the window" instead of
 *   tracking an explicit `left` pointer. This is a clever trick, but
 *   it obscures the sliding-window structure that's usually expected
 *   here — an interviewer would likely want to see an explicit `left`/
 *   `right` two-pointer window, especially since a `Map` from
 *   character to last-seen-index lets the window jump directly
 *   without incrementally deleting one character at a time.
 * - Variable name `map` for a `Set` is misleading (it's not a map).
 *
 * Areas of improvement:
 * - Rewrite using an explicit `left` pointer and a `Map` of
 *   character → last-seen index, so the window can jump directly
 *   instead of deleting one character at a time — same O(n) time
 *   bound, but a clearer, more conventional sliding-window shape.
 * - Rename `map` to `seen` or `window` to match what it actually is.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var lengthOfLongestSubstring = function (s) {
    // Sliding window with a Map of character -> last-seen index, so
    // the left edge can jump directly past a repeat instead of
    // stepping one character at a time. O(n) time, O(min(n, charset)) space.
    const lastSeen = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        if (lastSeen.has(char) && lastSeen.get(char) >= left) {
            left = lastSeen.get(char) + 1;
        }
        lastSeen.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};
*/
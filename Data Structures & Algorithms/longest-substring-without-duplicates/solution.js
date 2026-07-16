class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLen = 0;
        const res = new Set();
        for (let i = 0; i < s.length; i++){
            let cur = s[i];
            while(res.has(cur)){
                let next = res.values().next().value;
                res.delete(next);
            }
            res.add(cur);
            maxLen = Math.max(maxLen,res.size);
        }
        return maxLen;
    }
}

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - The variable `res` actually holds the sliding-window Set (not a
 *   result), which is a misleading name — a reader has to trace usage
 *   to realize it's the window, not the return value.
 * - Instead of an explicit `left` pointer, it removes the oldest
 *   entry from the Set (`res.values().next().value`) repeatedly until
 *   the duplicate is gone. This is functionally equivalent to shrinking
 *   from the left (since Set iteration order is insertion order and
 *   the window is always contiguous with no duplicates), and is still
 *   O(n) amortized — but it's a much less obvious/standard way to
 *   express the sliding window than tracking `left` directly with
 *   indices, which also makes it harder to verify correctness at a
 *   glance.
 * - Time O(n), space O(min(n, charset)) — optimal complexity, just a
 *   readability concern.
 *
 * Areas of improvement:
 * - Rename `res` to something like `window`.
 * - Use an explicit `left` index (or a Map of char -> last seen
 *   index) instead of repeatedly querying/deleting the Set's first
 *   entry, which is the more conventional and immediately verifiable
 *   sliding-window pattern.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    lengthOfLongestSubstring(s) {
        const lastSeen = new Map();
        let left = 0;
        let maxLen = 0;

        for (let right = 0; right < s.length; right++) {
            const ch = s[right];
            if (lastSeen.has(ch) && lastSeen.get(ch) >= left) {
                left = lastSeen.get(ch) + 1;
            }
            lastSeen.set(ch, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}
*/

/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
const mostFrequent = (nums, key) => {
    let hmap = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === key) {
            hmap.get(nums[i + 1])
                ? hmap.set(nums[i + 1], hmap.get(nums[i + 1]) + 1)
                : hmap.set(nums[i + 1], 1)
        }
    }

    return [...hmap].sort((a, b) => b[1] - a[1])[0][0]
};

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - Correct, but sorts the *entire* frequency map (`[...hmap].sort`)
 *   just to read off the single highest-frequency entry — that's
 *   O(n log n) when only O(n) is needed by tracking the running
 *   max frequency while building the map.
 * - The ternary-via-`hmap.get(...)  ? ... : ...` pattern for
 *   increment-or-initialize works but re-does the same `.get()`
 *   lookup twice; `(hmap.get(x) || 0) + 1` is both clearer and one
 *   lookup instead of two.
 *
 * Areas of improvement:
 * - Track `maxCount` and `result` while iterating instead of sorting
 *   the map afterward — turns O(n log n) into O(n).
 * - Use `hmap.set(k, (hmap.get(k) || 0) + 1)` to avoid the double
 *   lookup.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
const mostFrequent = (nums, key) => {
    const counts = new Map();
    let bestNum = null;
    let bestCount = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== key) continue;

        const next = nums[i + 1];
        const count = (counts.get(next) || 0) + 1;
        counts.set(next, count);

        if (count > bestCount) {
            bestCount = count;
            bestNum = next;
        }
    }

    return bestNum;
};
*/
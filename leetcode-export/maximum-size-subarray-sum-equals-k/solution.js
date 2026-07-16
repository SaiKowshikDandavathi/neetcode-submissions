/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
    let maxLength = 0
    let runningSum = 0
    let hmap = new Map()

    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i]
        if (runningSum === k) {
            maxLength = i + 1
        }

        if (hmap.has(runningSum - k)) {
            let index = i - hmap.get(runningSum - k)
            maxLength = Math.max(index, maxLength)
        }

        if (!hmap.has(runningSum)) {
            hmap.set(runningSum, i)
        }

    } console.log(hmap)
    return maxLength

};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Leftover debug statement `console.log(hmap)` on the line before
 *   `return maxLength` — harmless but shouldn't ship.
 * - The `runningSum === k` branch is actually redundant: it's the
 *   special case where `hmap.get(runningSum - k)` would need `k` to
 *   be a key mapped to index -1 (start of array), which the general
 *   prefix-sum branch already covers if the map were seeded with
 *   `hmap.set(0, -1)` up front — as written, both branches are needed
 *   only because that seed is missing.
 *
 * Areas of improvement:
 * - Remove the console.log.
 * - Seed `hmap.set(0, -1)` before the loop; that lets the single
 *   `hmap.has(runningSum - k)` check subsume the `runningSum === k`
 *   special case, simplifying the loop body.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var maxSubArrayLen = function (nums, k) {
    const firstIndexOfSum = new Map();
    firstIndexOfSum.set(0, -1);

    let runningSum = 0;
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];

        if (firstIndexOfSum.has(runningSum - k)) {
            maxLength = Math.max(maxLength, i - firstIndexOfSum.get(runningSum - k));
        }

        if (!firstIndexOfSum.has(runningSum)) {
            firstIndexOfSum.set(runningSum, i);
        }
    }

    return maxLength;
};
*/
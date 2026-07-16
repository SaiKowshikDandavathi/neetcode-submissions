/**
 * @param {number[]} nums
 * @return {number[]}
 */
const customSort = (a, b) => {
    if (a[1] === b[1]) {
        return b[0] - a[0]
    }
    return a[1] - b[1]
}

const frequencySort = (nums) => {
    let hashedValues = new Map()
    for (let i = 0; i < nums.length; i++) {
        hashedValues.get(nums[i]) ?
            hashedValues.set(nums[i], hashedValues.get(nums[i]) + 1)
            : hashedValues.set(nums[i], 1)
    }
    // console.log(hashedValues)
    const arrayFormed = [...hashedValues].sort(customSort)
    // console.log(arrayFormed)
    let res = []
    for (let i = 0; i < arrayFormed.length; i++) {
        for (let j = 0; j < arrayFormed[i][1]; j++) {
            res.push(arrayFormed[i][0])
        }
    } return res
}

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Counting uses a ternary-as-statement pattern
 *   (`hashedValues.get(nums[i]) ? hashedValues.set(...) : hashedValues.set(...)`)
 *   which works but is an unusual/less idiomatic way to express an
 *   increment-or-initialize — the more common idiom is
 *   `map.set(key, (map.get(key) || 0) + 1)`.
 * - `customSort` is declared at module top-level rather than local to
 *   `frequencySort`, which slightly widens its scope beyond where it's
 *   needed.
 * - Missing trailing semicolon after the `frequencySort` arrow function
 *   assignment.
 *
 * Areas of improvement:
 * - Use the `(map.get(key) || 0) + 1` idiom for counting.
 * - Scope `customSort` inside `frequencySort` (or keep it top-level only if
 *   intentionally shared/reused).
 * - Complexity is already optimal for this problem: O(n log n) time
 *   dominated by the sort, O(n) space for the frequency map and output —
 *   correctly breaks frequency ties by descending value as required.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var frequencySort = function (nums) {
    const counts = new Map();
    for (const num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }

    const sortedEntries = [...counts].sort((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1];
        return b[0] - a[0];
    });

    const res = [];
    for (const [value, freq] of sortedEntries) {
        for (let i = 0; i < freq; i++) {
            res.push(value);
        }
    }
    return res;
};
*/
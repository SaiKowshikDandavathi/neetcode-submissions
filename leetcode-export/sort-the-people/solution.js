/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
// const sortPeople = (names, heights) => {
//     /** Approach
//      * 1. create a hash map combining both arrays
//      * 2. Sort heights array using inbuilt sort function
//      * 3. Create a blank array and iterate the heights array, get the corresponding values from hash table and return it
//      */
//     const hashedValues = new Map()

//     for (let i = 0; i < heights.length; i++) {
//         hashedValues.set(heights[i], names[i])
//     }
//     heights.sort((a, b) => b - a)
//     let sortedNames = []
//     for (let i = 0; i < heights.length; i++) {
//         sortedNames.push(hashedValues.get(heights[i])
//         )
//     }
//     return sortedNames
// }

const sortPeople = (names, height) => {
    let profiles = []
    for (let i = 0; i < height.length; i++) {
        profiles.push([height[i], names[i]])
    }
    profiles.sort((a, b) => b[0] - a[0])
    return profiles.map(e => e[1])
}

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Lines 6-24 are a dead, fully commented-out earlier attempt (the
 *   hashmap-keyed-by-height version) left in the file — that version
 *   was also buggy since a Map keyed by height silently drops entries
 *   when two people share the same height, whereas the live [height,
 *   name] pair approach here correctly keeps duplicates.
 * - `profiles.sort((a, b) => b[0] - a[0])` is O(n log n), which is
 *   already optimal for this problem, but the comparator only sorts
 *   by height — ties in height are left in their original relative
 *   order purely because Array.prototype.sort is stable in modern JS
 *   engines; that's correct here but isn't called out anywhere.
 *
 * Areas of improvement:
 * - Delete the dead commented-out block (lines 6-24) before shipping.
 * - Rename the parameter `height` to `heights` to match the JSDoc and
 *   the second file-level parameter name for consistency.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
const sortPeople = (names, heights) => {
    const indices = names.map((_, i) => i);
    indices.sort((a, b) => heights[b] - heights[a]);
    return indices.map(i => names[i]);
}
*/
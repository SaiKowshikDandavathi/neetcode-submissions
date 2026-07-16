/**
 * @param {number[]} fruits
 * @return {number}
 2 pointers. 
 if map size more than 2, pop the starting element while decrementing count ib hashMap
 */
var totalFruit = function (fruits) {
    let map = new Map()
    let max = -1

    for (let start = 0, end = 0; end < fruits.length; end++) {
        let currentElement = fruits[end]
        map.set(currentElement, (map.get(currentElement) + 1) || 1);
        while (map.size > 2) {
            let char = fruits[start];
            let charCount = map.get(char)
            if (charCount - 1 <= 0) map.delete(char)
            else map.set(char, charCount - 1)
            start++
        }
        if (map.size >= 1) max = Math.max(max, end + 1 - start)
    } return max
};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Already the optimal approach: sliding window with a frequency map
 *   capped at 2 distinct keys, O(n) time, O(1) space (map holds at
 *   most 3 entries at any point). Nothing algorithmically to improve.
 * - Minor nit: `map.set(currentElement, (map.get(currentElement) + 1)
 *   || 1)` relies on `undefined + 1` being `NaN`, which is falsy, to
 *   fall back to `1`. It works, but it's a subtle trick — a plain
 *   `(map.get(currentElement) || 0) + 1` reads more directly.
 * - The doc comment above the function mixes JSDoc tags with free-form
 *   prose on the same block, which is a little unconventional
 *   stylistically.
 *
 * Areas of improvement:
 * - Replace the `NaN`-coalescing increment with `(map.get(x) || 0) +
 *   1` for clarity.
 * - Separate the JSDoc param/return tags from the algorithm
 *   explanation (e.g. put the explanation in a comment inside the
 *   function body).
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var totalFruit = function (fruits) {
    // Sliding window: at most 2 distinct fruit types allowed in the
    // window. Shrink from the left whenever a 3rd type appears.
    // O(n) time, O(1) space (map never holds more than 3 keys).
    const count = new Map();
    let left = 0;
    let max = 0;

    for (let right = 0; right < fruits.length; right++) {
        count.set(fruits[right], (count.get(fruits[right]) || 0) + 1);

        while (count.size > 2) {
            const leftFruit = fruits[left];
            count.set(leftFruit, count.get(leftFruit) - 1);
            if (count.get(leftFruit) === 0) count.delete(leftFruit);
            left++;
        }

        max = Math.max(max, right - left + 1);
    }

    return max;
};
*/
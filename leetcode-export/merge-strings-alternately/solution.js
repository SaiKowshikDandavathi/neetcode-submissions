/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {

    let mergedString = "";
    const word1Len = word1.length;
    const word2Len = word2.length;
    let i = 0;
    let j = 0;
    let word2Added = true;

    while (i < word1Len || j < word2Len) {
        if (i === word1Len) {
            mergedString += word2.substring(j);
            break;
        }
        if (j === word2Len) {
            mergedString += word1.substring(i);
            break
        }

        if (word2Added) {
            mergedString += word1[i];
            i++;
        } else {
            mergedString += word2[j];
            j++;
        }
        word2Added = !word2Added;
    }

    return mergedString;

};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct and optimal: O(m+n) time, and unavoidable O(m+n) output
 *   space for the merged string. Correctly handles unequal-length
 *   inputs via the `substring` fast paths.
 * - The flag name `word2Added` is misleading: when it's `true` the
 *   code actually appends a character from `word1`, not `word2` — the
 *   flag really means "it's word1's turn." That inversion makes the
 *   logic harder to follow at a glance.
 * - String concatenation with `+=` in a loop is O(n) per operation in
 *   the worst case for some engines; an array + `.join("")` is the
 *   more defensively-optimal idiom, though V8 typically handles this
 *   fine in practice.
 *
 * Areas of improvement:
 * - Rename `word2Added` to something like `useWord1Next` (or invert
 *   the boolean) so the name matches what actually happens on each
 *   branch.
 * - Optionally build the result with an array of characters and
 *   `.join("")` instead of repeated string concatenation.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var mergeAlternately = function (word1, word2) {
    const result = [];
    const maxLen = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLen; i++) {
        if (i < word1.length) result.push(word1[i]);
        if (i < word2.length) result.push(word2[i]);
    }

    return result.join("");
};
*/
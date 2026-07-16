/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = s.replace(/\s+/g,' ').trim();
    let arr = str.split(" ")
    const maxLength = arr.length-1
    const midPoint = Math.ceil(maxLength/2)
    for (let i = 0; i < midPoint;i++){
        let temp = arr[i]
        arr[i] = arr[maxLength-i]        
        arr[maxLength-i] = temp
    }return arr.join(" ")
};

console.log(reverseWords("a good   example"))

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - A live `console.log(reverseWords("a good   example"))` debug/test call
 *   was left executing at module scope — this actually runs every time the
 *   file is loaded, which is real leftover debug code (not just a comment)
 *   and would print to stdout in an interview review or in production.
 * - `maxLength`/`midPoint` naming is a bit indirect for what is really
 *   "index of last word" and "index to swap up to" — readable but could be
 *   clearer.
 *
 * Areas of improvement:
 * - Remove the stray `console.log` call at the bottom of the file.
 * - Rename `maxLength` to `lastIndex` since it's an index, not a length.
 * - Complexity is already reasonable: O(n) time, O(n) space (splitting
 *   into a word array is required in JS since strings are immutable), and
 *   the regex `replace(/\s+/g, ' ').trim()` correctly collapses/removes
 *   leading, trailing, and multiple interior spaces before splitting.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var reverseWords = function (s) {
    const words = s.trim().split(/\s+/);

    let left = 0;
    let right = words.length - 1;
    while (left < right) {
        [words[left], words[right]] = [words[right], words[left]];
        left++;
        right--;
    }

    return words.join(" ");
};
*/
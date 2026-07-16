/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {

    let read = 0;
    let write = 0;

    while(read < chars.length){
        let char = chars[read];
        let count = 0;
        while(read < chars.length && char === chars[read]){
            read++;
            count++;
        }
        chars[write++] = char;
        if(count > 1){
            for(let digit of count.toString()){
                chars[write++] = digit;
            }
        }
    }

    return write

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - This is already the optimal in-place two-pointer approach: O(n)
 *   time, O(1) extra space, mutates `chars` in place and returns the
 *   new length exactly as the problem requires. Handles single chars,
 *   runs of length >= 10 (via `count.toString()` splitting into
 *   multiple digit writes), and the final trailing run correctly.
 * - Only a very minor nit: `let char` shadows the built-in global
 *   `char` isn't a real risk in JS, but a more specific name like
 *   `currentChar` would read slightly clearer.
 *
 * Areas of improvement:
 * - None functionally required; optionally rename `char` for clarity.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var compress = function (chars) {
    let write = 0;
    let read = 0;

    while (read < chars.length) {
        const currentChar = chars[read];
        let count = 0;
        while (read < chars.length && chars[read] === currentChar) {
            read++;
            count++;
        }
        chars[write++] = currentChar;
        if (count > 1) {
            for (const digit of String(count)) {
                chars[write++] = digit;
            }
        }
    }

    return write;
};
*/
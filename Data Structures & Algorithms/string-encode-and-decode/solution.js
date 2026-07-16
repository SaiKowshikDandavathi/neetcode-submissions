class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedValue = '';
        for(const str of strs){
            encodedValue += `${str.length}#${str}`
        }
        return encodedValue;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        /**need a way to know the char and the next char*/
        let i = 0;

        while(i < str.length){
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let len = Number(str.substring(i, j));
            let word = str.substring(j + 1, j + 1 + len);
            res.push(word);
            i = j + 1 + len;

        }
        return res
    }
}

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Correct length-prefixed encoding scheme: each string is stored as
 *   `<length>#<string>`, so the delimiter `#` inside a string's own
 *   content can never be misread as a separator — decode always reads
 *   exactly `len` characters after the `#`, regardless of what they
 *   are. This correctly handles strings containing `#` characters,
 *   digits, empty strings (`""` encodes to `"0#"` and decodes back to
 *   `""`), and an empty input list (`encode([])` returns `''`,
 *   `decode('')` returns `[]`).
 * - Time O(total characters) for both encode and decode, space O(total
 *   characters) for the output — optimal for this problem, since every
 *   character must be read/written at least once.
 *
 * Areas of improvement:
 * - Minor style nit: the inner comment
 *   `/**need a way to know the char and the next char*​/` reads like a
 *   leftover thinking-out-loud note rather than documentation — could
 *   be removed or replaced with a comment describing the length-prefix
 *   scheme itself.
 * - Variable naming (`i`, `j`) is fine here since the scope is small,
 *   but slightly more descriptive names (`start`, `hashIndex`) would
 *   make the pointer arithmetic easier to follow at a glance.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    encode(strs) {
        let result = '';
        for (const str of strs) {
            result += `${str.length}#${str}`;
        }
        return result;
    }

    decode(str) {
        const res = [];
        let i = 0;

        while (i < str.length) {
            let hashIndex = i;
            while (str[hashIndex] !== '#') {
                hashIndex++;
            }
            const len = Number(str.slice(i, hashIndex));
            res.push(str.slice(hashIndex + 1, hashIndex + 1 + len));
            i = hashIndex + 1 + len;
        }

        return res;
    }
}
*/

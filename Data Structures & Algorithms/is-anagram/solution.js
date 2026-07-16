class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const stringMap = new Map();
        for(const char of s){
            stringMap.set(char, (stringMap.get(char)|| 0)+1);
        }

        for(const char of t){
            const value = stringMap.get(char) || 0;

            if(!value){
                return false
            }
            stringMap.set(char,stringMap.get(char)-1);
            if(stringMap.get(char)=== 0){
                stringMap.delete(char)
            }
        }
        return stringMap.size === 0 ? true : false
    }
}

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct and optimal: single-pass Map counting for `s`, then
 *   decrementing while scanning `t`, O(n) time O(n) space (or O(1)
 *   space if the alphabet is bounded/fixed). No explicit length
 *   check, but the algorithm self-corrects — if `t` is longer,
 *   `stringMap.get(char) || 0` hits 0 and returns false; if `t` is
 *   shorter, leftover positive counts leave `stringMap.size !== 0`.
 *   Empty-string vs empty-string correctly returns true.
 *
 * Areas of improvement:
 * - `return stringMap.size === 0 ? true : false` is a verbose way to
 *   write `return stringMap.size === 0`.
 * - An upfront `if (s.length !== t.length) return false` would let
 *   most mismatches short-circuit immediately instead of scanning
 *   both strings.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const counts = new Map();
        for (const ch of s) {
            counts.set(ch, (counts.get(ch) || 0) + 1);
        }

        for (const ch of t) {
            const remaining = counts.get(ch) || 0;
            if (remaining === 0) return false;
            counts.set(ch, remaining - 1);
        }

        return true;
    }
}
*/

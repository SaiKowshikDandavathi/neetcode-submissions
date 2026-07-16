class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        let left = 0;
        let right = s.length - 1;

        while(left < right){
            while(left < right && !this.isAlphaNumeric(s[left])){
                left++;
            }
            while(left < right && !this.isAlphaNumeric(s[right])){
                right--;
            }
            if(s[left] !== s[right]) return false
            left++;
            right--;
        }
        return true
    }
    isAlphaNumeric(c){
        return (
                (c >= "a" && c <= "z") || 
                (c >= "A" && c <= "Z") || 
                (c >= "0" && c <= "9")
            )
    }
}

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Already the optimal two-pointer approach: O(n) time, O(n) extra
 *   space only for the `toLowerCase()` copy (could be O(1) if
 *   case-folding were done per-character during comparison instead).
 *   Manual `isAlphaNumeric` range checks avoid regex overhead.
 *   Correctly handles empty string, single character, and
 *   all-non-alphanumeric input (inner while loops both exit via
 *   `left < right` guard, loop ends, returns true).
 *
 * Areas of improvement:
 * - `s.toLowerCase()` allocates a full copy of the string up front;
 *   comparing case-insensitively character-by-character would avoid
 *   that allocation, though it's a minor constant-factor concern.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while (left < right && !this.isAlphaNumeric(s[left])) left++;
            while (left < right && !this.isAlphaNumeric(s[right])) right--;
            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            left++;
            right--;
        }

        return true;
    }

    isAlphaNumeric(c) {
        return /[a-zA-Z0-9]/.test(c);
    }
}
*/


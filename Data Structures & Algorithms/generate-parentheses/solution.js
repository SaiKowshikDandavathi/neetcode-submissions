class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = []

        function makeCombinations(open,close,current){
            if(current.length === 2 * n){
                res.push(current)
                return
            }

            if(open < n){ 
               makeCombinations(open + 1, close, current + "(");
            }
            

            if(close < n && close < open) {
               makeCombinations(open, close + 1,  current + ")");
            }
        }
        makeCombinations(0,0,"")
        return res
    }
}

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Already the standard optimal backtracking approach, generating
 *   only valid combinations (never building and discarding invalid
 *   strings) — O(4^n / sqrt(n)) time, matching the Catalan-number
 *   bound, which is optimal for this problem.
 * - `current + "("` builds a new string at each call rather than
 *   mutating a shared buffer, which is O(n) extra copies per call
 *   but doesn't change the overall asymptotic class.
 *
 * Areas of improvement:
 * - Could use a mutable array + push/pop instead of string
 *   concatenation to avoid the repeated string copies, marginally
 *   reducing constant-factor overhead.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    generateParenthesis(n) {
        const res = [];

        function backtrack(open, close, current) {
            if (current.length === 2 * n) {
                res.push(current.join(""));
                return;
            }
            if (open < n) {
                current.push("(");
                backtrack(open + 1, close, current);
                current.pop();
            }
            if (close < open) {
                current.push(")");
                backtrack(open, close + 1, current);
                current.pop();
            }
        }

        backtrack(0, 0, []);
        return res;
    }
}
*/

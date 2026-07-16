class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;
        while(l <= r){
            let k = Math.floor((l+r)/2);
            let totalTime = 0;
            for(const pile of piles){
                totalTime += Math.ceil(pile/k);
            }
            if(totalTime <= h){
                res = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }
        return res
    }
}

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Already the optimal binary-search-on-answer approach: search
 *   speed `k` in [1, max(piles)], O(log(max(piles))) iterations, each
 *   doing an O(n) feasibility check, for O(n log(max(piles))) total —
 *   this is the accepted optimal complexity for this problem.
 * - Correctly handles single-pile input and h === piles.length edge
 *   case (max possible speed still checked).
 *
 * Areas of improvement:
 * - Minor style nit: `res` as the variable name for "best feasible
 *   speed found so far" is a little generic; `bestSpeed` would read
 *   more clearly.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let bestSpeed = right;

        while (left <= right) {
            const speed = Math.floor((left + right) / 2);
            const hoursNeeded = piles.reduce((sum, pile) => sum + Math.ceil(pile / speed), 0);

            if (hoursNeeded <= h) {
                bestSpeed = speed;
                right = speed - 1;
            } else {
                left = speed + 1;
            }
        }

        return bestSpeed;
    }
}
*/

class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = position.map((p,i) => [p,speed[i]]);
        pairs.sort((a,b) => b[0] - a[0]);
        const stack = [];
        for(const [p ,s] of pairs){
            stack.push((target - p)/s);
            console.log(stack)
            while(stack.length >= 2
                && stack[stack.length - 1] <= stack[stack.length -2]){
                stack.pop();
            }
        }
        console.log("After",stack)
        return stack.length
    }
}

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Two leftover `console.log` debug statements were left in the
 *   loop and after it — noisy for interview-ready code (removed
 *   above).
 * - Otherwise this is the standard, optimal approach: sort cars by
 *   starting position descending (O(n log n)), then use a monotonic
 *   stack of arrival times to merge fleets (O(n)). Correctly handles
 *   a single car (stack ends with length 1) and cars already fused
 *   into one fleet.
 *
 * Areas of improvement:
 * - Destructuring `[p, s]` with a stray space (`[p ,s]`) is a minor
 *   formatting nit.
 * - Could destructure `position`/`speed` into `{pos, time}` objects
 *   instead of tuples for slightly better readability.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    carFleet(target, position, speed) {
        const cars = position
            .map((p, i) => [p, speed[i]])
            .sort((a, b) => b[0] - a[0]);

        const stack = [];
        for (const [p, s] of cars) {
            const arrivalTime = (target - p) / s;
            stack.push(arrivalTime);
            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop();
            }
        }

        return stack.length;
    }
}
*/
class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const res = Array.from({length: temperatures.length}).fill(0);
        for (let i = 0; i < temperatures.length; i++){
            let cur = temperatures[i];
            while(stack.length && cur > stack[stack.length - 1][0]){
                const [temp, index] = stack.pop();
                res[index] = i - index;      
            }
            stack.push([cur,i]);
        }
        console.log(res)
        return res
    }
}

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - `console.log(res)` before the return is a leftover debug
 *   statement (removed above).
 * - Otherwise this is the optimal monotonic decreasing stack
 *   approach: O(n) time, O(n) worst-case space, each index pushed
 *   and popped at most once. Correctly handles a strictly decreasing
 *   input (nothing ever pops, all zeros) and an empty array.
 *
 * Areas of improvement:
 * - `Array.from({length: temperatures.length}).fill(0)` is more
 *   verbose than `new Array(temperatures.length).fill(0)`.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack = []; // stores indices, temperatures decreasing

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const idx = stack.pop();
                res[idx] = i - idx;
            }
            stack.push(i);
        }

        return res;
    }
}
*/

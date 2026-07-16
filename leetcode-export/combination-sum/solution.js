/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {

    let res = []

    function makeCombinations(idx, comb, total) {
        if (total === target) {
            res.push([...comb])
            return;
        }

        if (total > target || idx >= candidates.length) return

        comb.push(candidates[idx])
        makeCombinations(idx, comb, total + candidates[idx])

        comb.pop();
        makeCombinations(idx + 1, comb, total)
    }

    makeCombinations(0, [], 0)
    return res

};
/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Correct, standard backtracking solution. Exponential time is
 *   inherent to this problem (it enumerates all valid combinations), and
 *   this implementation achieves the standard optimal backtracking
 *   complexity by pruning as soon as `total > target` and by allowing
 *   index reuse (`makeCombinations(idx, ...)`, not `idx + 1`) to permit
 *   repeated elements as the problem requires.
 * - Uses `comb.push`/`comb.pop` (in-place backtracking) with `[...comb]`
 *   only on a successful match — avoids unnecessary array copies on every
 *   recursive call, which is the efficient way to do this.
 * - Correctly handles the case where `candidates` is empty or no
 *   combination sums to target (returns `[]`).
 *
 * Areas of improvement:
 * - None of substance. Minor nit: sorting `candidates` first and breaking
 *   early once `candidates[idx] > target - total` would prune slightly
 *   faster in practice, though it doesn't change the worst-case
 *   complexity.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var combinationSum = function (candidates, target) {
    const res = [];

    function backtrack(idx, combo, total) {
        if (total === target) {
            res.push([...combo]);
            return;
        }
        if (total > target || idx >= candidates.length) return;

        combo.push(candidates[idx]);
        backtrack(idx, combo, total + candidates[idx]);
        combo.pop();

        backtrack(idx + 1, combo, total);
    }

    backtrack(0, [], 0);
    return res;
};
*/

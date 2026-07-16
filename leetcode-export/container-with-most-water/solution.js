/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const minHeight = Math.min(height[left], height[right]);
        const area = minHeight * (right - left);
        maxArea = Math.max(area, maxArea);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - The local variable `maxArea` shadows the outer function name
 *   `maxArea` (the function expression assigned to `var maxArea`).
 *   It works because the `let` binding takes over the function's
 *   scope, but it reads confusingly on first pass — a reviewer has
 *   to double check this isn't a recursive self-reference.
 * - No explicit guard for `height.length < 2`; it happens to work
 *   (loop just never runs, returns 0) but that's incidental rather
 *   than a documented edge case.
 *
 * Areas of improvement:
 * - Rename the accumulator to `best` or `maxArea_` to avoid the
 *   name collision with the enclosing function.
 * - Add a one-line comment noting the invariant that drives the
 *   pointer move (always advance the shorter side).
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let best = 0;

    while (left < right) {
        const width = right - left;
        const area = Math.min(height[left], height[right]) * width;
        best = Math.max(best, area);

        // Moving the taller pointer can only shrink width without
        // increasing the limiting (shorter) height, so always
        // advance the shorter side.
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return best;
};
*/
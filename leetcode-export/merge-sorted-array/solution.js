/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let j = 0
    let maxIterations = nums1.length

    for (let i = m; i < nums1.length; i++) {
        nums1.splice(i, 1, nums2[j])
        j++
    }
    nums1.sort((a, b) => a - b)
};

/* ============================================================
 * REVIEW — Rating: 4/10
 *
 * Why this isn't perfect:
 * - `maxIterations` is declared and never used — dead code.
 * - `nums1.splice(i, 1, nums2[j])` inside a loop and then a full
 *   `nums1.sort(...)` afterward gives roughly O(n log n) time overall,
 *   when the problem's whole point is the O(m+n) in-place merge
 *   from the back using two pointers — a very common interview
 *   follow-up ("can you do it without sorting?").
 * - Correctness happens to hold (splice-then-sort produces the right
 *   final array), but it discards the "already sorted" structure of
 *   both inputs that the optimal algorithm exploits.
 *
 * Areas of improvement:
 * - Remove the unused `maxIterations` variable.
 * - Merge from the end of `nums1` backward with three pointers
 *   (`i = m-1`, `j = n-1`, `k = m+n-1`) to get O(m+n) time and true
 *   O(1) extra space, with no sort call.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
};
*/
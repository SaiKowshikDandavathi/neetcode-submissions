/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return num;
        }
        seen.add(num);
    }
    return -1;  // Just to satisfy the compiler, this should never be reached
}

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - Uses O(n) extra space via a `Set` to track `seen` values. The
 *   problem's constraints (numbers in [1, n] with exactly one repeat,
 *   array not modifiable in the "follow up") are a strong hint the
 *   interviewer wants Floyd's cycle detection (treat nums[i] as a
 *   "next pointer") for O(1) space, or a binary-search-on-answer
 *   approach for O(n log n) time / O(1) space.
 * - The trailing comment "Just to satisfy the compiler" is JS-isms
 *   borrowed from typed languages — in JS this line is only reached if
 *   there's truly no duplicate, which contradicts the problem's
 *   guarantee, so the comment reads a little oddly here.
 *
 * Areas of improvement:
 * - Implement Floyd's tortoise-and-hare cycle detection to hit the
 *   O(1)-space bound the problem is explicitly testing for.
 * - Drop the leftover "satisfy the compiler" comment or replace it with
 *   something accurate to JS (e.g. "unreachable given the problem's
 *   guarantee of exactly one duplicate").
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var findDuplicate = function (nums) {
    // Floyd's cycle detection: treat nums[i] as a pointer to index
    // nums[i]. Because a value repeats, following these pointers from
    // index 0 must eventually enter a cycle, and the cycle's entry
    // point is the duplicate value. O(n) time, O(1) space.
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
};
*/
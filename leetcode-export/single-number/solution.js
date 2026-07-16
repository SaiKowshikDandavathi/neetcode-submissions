/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const hmap = new Map()

    for (let i = 0; i < nums.length; i++) {
        hmap.set(nums[i], (hmap.get(nums[i]) || 0) + 1)
    }
    let res = [...hmap].filter(e => e[1] === 1)
    return res[0][0]
};

/* ============================================================
 * REVIEW — Rating: 5/10
 *
 * Why this isn't perfect:
 * - Uses a `Map` to count occurrences, which is O(n) time but also O(n)
 *   extra space, plus an additional `[...hmap].filter(...)` pass that
 *   allocates yet another array just to find the single non-duplicate
 *   entry. This problem has a well-known O(n) time / O(1) space solution
 *   using XOR (since `a ^ a === 0` and `a ^ 0 === a`, XORing all elements
 *   cancels every pair and leaves the singleton) — this submission doesn't
 *   use it.
 *
 * Areas of improvement:
 * - Replace the hashmap + filter with a single XOR accumulator pass:
 *   O(n) time, O(1) space, and no extra array allocations.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var singleNumber = function (nums) {
    let result = 0;
    for (const num of nums) {
        result ^= num;
    }
    return result;
};
*/
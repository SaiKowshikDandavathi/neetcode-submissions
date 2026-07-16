/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = {};
    for (const num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    // Create buckets: index = frequency, value = array of numbers
    const buckets = Array(nums.length + 1).fill().map(() => []);
    for (const [num, freq] of Object.entries(freqMap)) {
        buckets[freq].push(Number(num));
    }

    // Gather top k frequent elements from buckets (from high freq to low)
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (const num of buckets[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }
    return result;
};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Bucket sort by frequency is the truly optimal approach for this
 *   problem — O(n) time and O(n) space — strictly better than the
 *   sort-based (O(n log n)) and min-heap (O(n log k)) alternatives
 *   also present in this problem's submission history.
 * - `buckets[freq].push(Number(num))` converts the object key back
 *   to a number since `Object.entries` stringifies keys — correct,
 *   but relying on numeric-string coercion here is a bit implicit;
 *   a `Map` would avoid the string round-trip entirely.
 * - Using a plain object (`freqMap`) instead of a `Map` means
 *   `Object.entries` iterates keys in a JS-engine-defined order
 *   (numeric-like keys first, ascending) rather than insertion
 *   order — harmless for this problem since order doesn't matter,
 *   but worth knowing.
 *
 * Areas of improvement:
 * - Swap `freqMap`/`Object.entries` for a `Map` to avoid the
 *   `Number(num)` string-to-number coercion.
 * - Nothing else — the bucket-sort core logic is correct and clean.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var topKFrequent = function (nums, k) {
    const freqMap = new Map();
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    const buckets = Array.from({ length: nums.length + 1 }, () => []);
    for (const [num, freq] of freqMap) {
        buckets[freq].push(num);
    }

    const result = [];
    for (let freq = buckets.length - 1; freq >= 0 && result.length < k; freq--) {
        for (const num of buckets[freq]) {
            result.push(num);
            if (result.length === k) break;
        }
    }
    return result;
};
*/
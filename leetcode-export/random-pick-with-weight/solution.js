/**
 * @param {number[]} w
 */
var Solution = function (w) {
    this.weights = [];
    this.sum = 0;

    for (let weight of w) {
        this.sum += weight;
        this.weights.push(this.sum)
    }

};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    let index = Math.floor(Math.random() * this.sum);
    let arr = this.weights
    let start = 0, end = arr.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (index < arr[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return start
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - `pickIndex` reassigns `arr` from `this.weights` purely as a local
 *   alias; harmless but adds an unnecessary variable rather than binary
 *   searching `this.weights` directly.
 *
 * Areas of improvement:
 * - Drop the `arr` alias for one less line of indirection.
 * - Already optimal: O(n) constructor (prefix sums), O(log n) pickIndex via
 *   binary search on the prefix-sum array, correctly returns the leftmost
 *   index whose cumulative weight exceeds the random draw.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var Solution = function (w) {
    this.prefixSums = [];
    this.totalSum = 0;

    for (const weight of w) {
        this.totalSum += weight;
        this.prefixSums.push(this.totalSum);
    }
};

Solution.prototype.pickIndex = function () {
    const target = Math.random() * this.totalSum;
    let lo = 0, hi = this.prefixSums.length - 1;

    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (this.prefixSums[mid] <= target) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }

    return lo;
};
*/
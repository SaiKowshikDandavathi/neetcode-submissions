/**
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.values = []
    this.sum = 0
    this.size = size
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    this.values.push(val)
    this.sum += val
    if (this.values.length > this.size) {
        let value = this.values.splice(0,1)
        this.sum = this.sum - value
    }
    return this.sum / this.values.length
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct: maintains a running `sum` and a bounded window array,
 *   evicting the oldest value once the window exceeds `size`.
 * - `this.values.splice(0, 1)` removes the front of the array, which
 *   is O(size) per call because every remaining element has to shift
 *   left — for a large window this makes `next` O(size) instead of
 *   amortized O(1).
 *
 * Areas of improvement:
 * - Use an index-based circular buffer (or a head/tail pointer into a
 *   fixed array) instead of `splice`, so `next` is true O(1) per call
 *   regardless of window size.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var MovingAverage = function (size) {
    this.size = size;
    this.window = new Array(size);
    this.count = 0;
    this.head = 0;
    this.sum = 0;
};

MovingAverage.prototype.next = function (val) {
    if (this.count === this.size) {
        this.sum -= this.window[this.head];
    } else {
        this.count++;
    }

    this.window[this.head] = val;
    this.sum += val;
    this.head = (this.head + 1) % this.size;

    return this.sum / this.count;
};
*/
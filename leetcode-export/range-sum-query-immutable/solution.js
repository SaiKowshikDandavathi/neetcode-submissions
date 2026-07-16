/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.res = [];
    let sum = 0
    for (let i = 0; i < nums.length; i++ ){
        sum += nums[i]
        this.res.push(sum)
    }
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    // console.log(this.res)
    return this.res[right] - (left > 0 ? this.res[left-1]: 0)
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Leftover commented-out `console.log(this.res)` debug statement in
 *   `sumRange` should have been removed.
 * - `this.res` is a slightly generic name for a prefix-sum array; something
 *   like `this.prefixSums` would self-document its purpose.
 *
 * Areas of improvement:
 * - Remove the dead debug comment.
 * - Rename `this.res` for clarity.
 * - Complexity is already optimal: O(n) one-time construction, O(1) per
 *   `sumRange` query via prefix-sum subtraction.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var NumArray = function (nums) {
    this.prefixSums = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        this.prefixSums[i + 1] = this.prefixSums[i] + nums[i];
    }
};

NumArray.prototype.sumRange = function (left, right) {
    return this.prefixSums[right + 1] - this.prefixSums[left];
};
*/
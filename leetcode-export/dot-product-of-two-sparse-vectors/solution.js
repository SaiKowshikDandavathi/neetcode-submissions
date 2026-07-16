/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function (nums) {
    this.pairs = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            this.pairs.push([i, nums[i]])
        }
    }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function (vec) {

    let sum = 0;
    let i = 0;
    let j = 0;

    // console.log(this.pairs)
    // console.log(vec.pairs)

    while(i < this.pairs.length && j < vec.pairs.length){
        // console.log(this.pairs[i][0], vec.pairs[j][0])
        if(this.pairs[i][0] === vec.pairs[j][0]){
            // console.log(sum)
            sum += this.pairs[i][1] * vec.pairs[j][1]
            i++
            j++
        } else if (this.pairs[i][0] > vec.pairs[j][0]){
            j++
        } else {
            i++
        }
    }

    return sum

};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - This is the genuinely optimal approach for the problem: only
 *   non-zero (index, value) pairs are stored (O(k) space where k
 *   is the number of non-zeros, versus the dense O(n) storage used
 *   by other attempts at this problem), and `dotProduct` merges
 *   both pair lists with a two-pointer walk in O(k1 + k2) time.
 *   This is the whole point of a "sparse vector" abstraction.
 * - Several leftover commented-out `console.log` debug lines
 *   (lines 25, 26, 29, 31) are dead code that should be removed.
 *
 * Areas of improvement:
 * - Delete the dead console.log comments.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var SparseVector = function (nums) {
    this.pairs = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            this.pairs.push([i, nums[i]]);
        }
    }
};

SparseVector.prototype.dotProduct = function (vec) {
    let sum = 0;
    let i = 0;
    let j = 0;

    while (i < this.pairs.length && j < vec.pairs.length) {
        const [idx1, val1] = this.pairs[i];
        const [idx2, val2] = vec.pairs[j];

        if (idx1 === idx2) {
            sum += val1 * val2;
            i++;
            j++;
        } else if (idx1 < idx2) {
            i++;
        } else {
            j++;
        }
    }

    return sum;
};
*/
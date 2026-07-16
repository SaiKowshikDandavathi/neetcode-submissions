/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function (nums) {
    this.values = nums
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function (vec) {
    let j = 0
    let arr = this.values
    let res = 0
    let arr2 = vec.values
    if (arr.length !== arr2.length) return []
    for (let i = 0; i < arr2.length; i++) {
        res += (arr[i] * arr2[i])
    }
    return res
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
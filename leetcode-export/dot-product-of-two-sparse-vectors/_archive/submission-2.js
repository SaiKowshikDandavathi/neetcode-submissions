/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.values = nums
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let nums1 = this.values
    let nums2 = vec.values
    let res = [];
    let product;
    for(let i = 0; i < nums2.length; i++){
        product = nums2[i] * nums1[i]
        res.push(product)
    }
    // console.log(res,nums2)
    return res.reduce((acc,cur) => acc + cur, 0)
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
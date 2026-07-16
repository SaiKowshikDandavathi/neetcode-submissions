/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.res = [];
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        this.res.push(sum)
    }

};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    // console.log(this.res)
    return this.res[right] - (left > 0 ? this.res[left - 1] : 0)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
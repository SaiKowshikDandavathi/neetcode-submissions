/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = []
    let subset = []

    function createSubSet(i) {
        if (i === nums.length) {
            res.push([...subset])
            return
        }

        subset.push(nums[i]);
        createSubSet(i + 1);

        subset.pop()
        console.log("after-pop", i, subset)
        createSubSet(i + 1)

    }
    createSubSet(0)
    return res



};
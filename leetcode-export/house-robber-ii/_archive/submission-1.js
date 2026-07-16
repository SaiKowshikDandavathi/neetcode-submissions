/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    const memo1 = Array.from({ length: nums.length }).fill(0);
    const memo2 = new Array(nums.length).fill(0);

    memo1[0] = nums[0];
    memo2[1] = nums[1];

    const memo1Max = calculateAmount(nums, memo1, 1, nums.length - 1);
    const memo2Max = calculateAmount(nums, memo2, 2, nums.length);

    return Math.max(memo1Max, memo2Max);

};

function calculateAmount(inputArr, memo, startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
        let cur = inputArr[i];
        let prev = i - 2 > -1 ? memo[i - 2] : 0;
        memo[i] = Math.max(cur + prev, memo[i - 1])
    }
    return Math.max(...memo)
}
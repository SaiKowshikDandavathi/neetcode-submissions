/**
 * @param {number[]} nums
 * @return {number}
 */

const swap = (arr, ele1, ele2) => [arr[ele1], arr[ele2]] = [arr[ele2], arr[ele1]]

const getPivotPoint = (nums, start, end) => {
    let pivotIndex = start
    for (let i = start + 1; i <= end; i++) {
        if (nums[i] < nums[start]) {
            pivotIndex++
            swap(nums, i, pivotIndex)
        }
    }
    if (pivotIndex !== start) {
        swap(nums, pivotIndex, start)
    }
    return pivotIndex
}


var findMin = function (nums, start = 0, end = nums.length - 1) {
    if (start < end) {
        const pivot = getPivotPoint(nums, start, end)
        findMin(nums, start, pivot - 1)
        findMin(nums, pivot + 1, end)
    }
    return nums[0]
};
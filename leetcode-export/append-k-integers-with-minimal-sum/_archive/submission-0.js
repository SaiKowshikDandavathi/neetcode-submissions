/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSum = function (nums, k) {
    let sum = (k * (k + 1)) / 2
    nums = Array.from(new Set(nums))
    nums.sort((a, b) => a - b)

    for (let key in nums) {
        if (nums[key] <= k) {
            k++
            sum = sum - nums[key] + k
            // console.log(sum)
        }
        else break
    }
    return sum

};

/**
    nums = [5,6]
    k = 6
    sum = 21
    Loop 1
        sum = 21 - 5 + 7 = 23
    Loop 2
        sum = 23 - 6 + 8 = 25

    [1,4,25,10,25] k = 2




 */
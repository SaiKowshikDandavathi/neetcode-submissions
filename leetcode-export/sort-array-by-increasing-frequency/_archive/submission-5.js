/**
 * @param {number[]} nums
 * @return {number[]}
 */
const customSort = (a, b) => {
    if (a[1] === b[1]) {
        return b[0] - a[0]
    }
    return a[1] - b[1]
}

const frequencySort = (nums) => {
    let hashedValues = new Map()
    for (let i = 0; i < nums.length; i++) {
        hashedValues.get(nums[i]) ?
            hashedValues.set(nums[i], hashedValues.get(nums[i]) + 1)
            : hashedValues.set(nums[i], 1)
    }
    // console.log(hashedValues)
    // const arrayFormed = [...hashedValues].sort(customSort)
    // // console.log(arrayFormed)
    // let res = []
    // for (let i = 0; i < arrayFormed.length; i++) {
    //     for (let j = 0; j < arrayFormed[i][1]; j++) {
    //         res.push(arrayFormed[i][0])
    //     }
    // } return res
        return nums.sort((a, b) => hashedValues.get(a) - hashedValues.get(b) || b - a)

}
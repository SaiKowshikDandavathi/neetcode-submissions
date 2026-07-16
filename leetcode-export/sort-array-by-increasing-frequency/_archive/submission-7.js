/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {

    const hmap = new Map()
    for (let i = 0; i < nums.length; i++) {
        hmap.set(nums[i], (hmap.get(nums[i]) || 0) + 1)
    }
    const hmapArr = [...hmap].sort((a, b) => {
        if (a[1] === b[1]) return b[0] - a[0]
        return a[1] - b[1]
    })
    console.log(hmapArr)
    let sortedArr = []
    for (let i = 0; i < hmapArr.length; i++) {
        for(let j = 0; j < hmapArr[i][1];j++){
            sortedArr.push(hmapArr[i][0])
        }

    }
    return sortedArr
};
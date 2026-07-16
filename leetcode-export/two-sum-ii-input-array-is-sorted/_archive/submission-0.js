/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let resArr = []
    function getIndex(start = 0, end = numbers.length - 1) {
        if (start < end) {
            let sum = numbers[start] + numbers[end]
            console.log(sum)
            if (sum === target) {
                resArr.push(start + 1)
                resArr.push(end + 1)
                return
            }
            if (sum > target) end--
            else start++
            getIndex(start, end)
        } else {
            return resArr
        }
    }
    getIndex()
    return resArr

};
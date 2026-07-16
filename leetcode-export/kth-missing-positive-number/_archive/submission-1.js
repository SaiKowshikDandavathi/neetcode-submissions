/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
/**
   - create a new array with constaint length
   - Loop through input array and map its value to corresponding index
   - Make another loop and reurn the index in res array that has value of -1 in k
 */
var findKthPositive = function (arr, k) {
    const max = arr.length + k + 1
    console.log(max)
    const array = new Array(max).fill(-1);
    let count = 0

    for (let key in arr) {
        array[arr[key]] = arr[key]
    }

    for (let i = 1; i < array.length; i++) {
        if (array[i] === -1) {
            count++
        }
        if (count === k) {
            return i
        }
    }

};
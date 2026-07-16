/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let arr = s
    let charSet = new Set();
    let max = 0;
    console.log(charSet)

    for (let start = 0, end = 0; end < arr.length; end++) {
        let currentElement = arr[end];
        while (charSet.has(currentElement)) {
            let ele = arr[start]
            charSet.delete(ele)
            start++
        }
        charSet.add(currentElement)
        max = Math.max(max, end - start + 1)
    } 

    return max
};
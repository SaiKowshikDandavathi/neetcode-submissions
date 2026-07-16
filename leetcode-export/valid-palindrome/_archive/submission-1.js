/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const regex = /[^0-9a-zA-Z]/g
    const fs = s.replace(regex, '').toLowerCase()
    console.log(fs)

    let start = 0
    let end = fs.length - 1;

    while (start <= end) {
        console.log(fs[start],fs[end])
        if (fs[start] === fs[end]) {
            start++
            end--
        } else {
            return false
        }
    } return true

};
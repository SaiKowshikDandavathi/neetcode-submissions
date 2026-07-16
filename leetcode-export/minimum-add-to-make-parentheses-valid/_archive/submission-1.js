/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let open = 0
    let close = 0;

    for (let char of s) {
        console.log(!open)
        if (char === "(") open++
        else if (!open) close++
        else open--
    }


    return open + close

};
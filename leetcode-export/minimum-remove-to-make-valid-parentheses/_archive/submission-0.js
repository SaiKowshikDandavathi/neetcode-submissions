/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let count = 0
    let res = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ")" && count < 1) {
        }
        else if (s[i] === ")") {
            count--
            res.push(s[i])
        } else if ((s[i] === "(")) {
            count++
            res.push(s[i])
        } else {
            res.push(s[i])
        }
    }

    if (count > 0) {
        for (let j = res.length - 1; (j >= 0 && count > 0); j--) {
            if (res[j] === "(") {
                res.splice(j, 1)
                count--
            }
        }
    }


    return res.join("")


};
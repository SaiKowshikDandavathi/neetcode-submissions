/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {

    let stack = [];
    let count = 0;
    let cur;

    for (let i = 0; i < s.length; i++) {
        cur = s[i];
        if (cur === ")" && count === 0) continue
        if (cur === "(") count++
        if (cur === ")") count--
        stack.push(cur)
    }
    let j = stack.length - 1
    while (count > 0 && j >= 0) {
        if (stack[j] === "(") {
            stack[j] = ""
            count--
        }
        j--
    }

    return stack.join("")

};
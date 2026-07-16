/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {

    let count = 0;
    let i = 0;
    let stack = [];
    // console.log(s.length)

    while (i < s.length) {
        if (s[i] === ")" && count < 1) {
            i++
            continue
        }
        if (s[i] === "(") {
            count++
        }
        if (s[i] === ")") {
            count--
        }
        stack.push(s[i])
        i++;
    }

    for (let j = stack.length - 1; j >= 0 && count > 0; j--) {
        if (stack[j] === "(") {
            stack.splice(j, 1);
            count--;
        }
    }

    return stack.join("")

};
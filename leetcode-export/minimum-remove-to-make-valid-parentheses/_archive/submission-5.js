/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let count = 0;
    const stack = [];

    for (let char of s) {
        if (char === ")" && count === 0) {
            continue;
        }
        if (char === "(") {
            count++
        }
        if (char === ")") {
            count--;
        }
        stack.push(char);
    }
    const bracketToRemove = count > 0 ? "(" : ")";
    console.log(stack,count)

    for (let j = stack.length - 1; j >= 0 && count != 0; j--) {
        if (stack[j] === bracketToRemove) {
            stack.splice(j, 1);
            count--
        }
    }

    return stack.join("")

};
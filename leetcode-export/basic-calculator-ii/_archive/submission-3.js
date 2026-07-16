/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {

    let number = '';
    let stack = [];
    let cur;
    let sign = null;

    for (let i = 0; i <= s.length; i++) {
        let cur = s[i];
        if (cur === ' ') continue;
        if (!isNaN(cur)) {
            number += cur
        }
        if (isNaN(cur)) {
            number = Number(number);
            switch (sign) {
                case "+":
                case null:
                    stack.push(number);
                    break;
                case "-":
                    stack.push(-number);
                    break;
                case "*":
                    stack.push(number * stack.pop());
                    break;
                case "/":
                    stack.push(parseInt(stack.pop() / number, 10))
                    break;
            }
            sign = cur;
            number = '';
        }
    } 
    // console.log(stack)
    
    return stack.reduce((acc, cur) => acc + cur, 0)

};
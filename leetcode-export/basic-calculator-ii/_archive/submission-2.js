/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    /**
        - Loop through the string
        - If the current element is a number, push to the queue
        - If its a Math operator, take the last element in stack and next element and do the operation, increment the iterative operation
        - If it is a negative sign, push - to the stack
        - reduce the stack and return the result
     */

    let stack = []
    let i = 0
    let cur;
    let sign = null;
    let num = ''
    for (let i = 0; i <= s.length; i++) {
        cur = s[i]
        if (cur === ' ') continue
        if (!isNaN(cur)) num += cur
        if (isNaN(cur)) {
            num = Number(num)
            switch (sign) {
                case '+':       
                case null:
                    stack.push(num)
                    break
                case "-":
                    stack.push(-num)
                    break
                case "*":
                    stack.push(stack.pop() * num)
                    break
                case "/":
                    stack.push(parseInt(stack.pop() / num, 10))
                    break
            }
            sign = cur
            num = ''
        }
    }
    console.log(stack)
    return stack.reduce((acc, cur) => {
        return acc + cur
    }, 0)
};
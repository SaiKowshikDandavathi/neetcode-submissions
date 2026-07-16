/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let stack = [];
    let num = '';
    let sign = null

    for (let i = 0; i <= s.length; i++) {
        let cur = s[i];
        if (cur === " ") continue
        if (!isNaN(cur)) num += cur;
        if (isNaN(cur)) {
            num = Number(num)
            switch (sign) {
                case '+':
                case null:
                    stack.push(num)
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                case '/':
                    stack.push(parseInt(stack.pop() / num, 10));
                    break;
            }
            sign = cur;
            num = '';
        }
    }

    return stack.reduce((acc, cur) => {
        return acc + cur
    }, 0)
};
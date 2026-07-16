/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    if (!s) return false;
    let stack = [];
    let i = 0;

    while (i < s.length) {
        let cur = s[i];
        i += 1;
        switch (true) {
            case cur === ")":
                if (stack.pop() !== "(") {
                    return false
                }
                break;
            case cur === "]":
                if (stack.pop() !== "[") {
                    return false
                }
                break;
            case cur === "}":
                if (stack.pop() !== "{") {
                    return false
                }
                break;
            default:
                stack.push(cur)
        }
    }

    return stack.length !== 0 ? false : true

};
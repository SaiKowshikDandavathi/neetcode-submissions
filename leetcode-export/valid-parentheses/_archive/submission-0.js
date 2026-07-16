/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    let cur
    for (let i = 0; i < s.length; i++) {
        cur = s[i]
        console.log(cur)
        switch (cur) {
            case "(":
                stack.push(")")
                break

            case "[":
                stack.push("]")
                break

            case "{":
                stack.push("}")
                break

            default:
                if (cur !== stack.pop()) {
                    return false
                }
        }
    }
    console.log("stack", stack)
    return stack.length ? false : true



};
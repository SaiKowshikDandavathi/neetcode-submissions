class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeToOpen = {
            ")" : "(",
            "}": "{",
            "]": "["
        }

        for (const char of s){
            if(closeToOpen[char] && stack.length > 0){
                console.log(char,stack,stack[stack.length-1])
                if (closeToOpen[char] === stack[stack.length-1]){
                    stack.pop()
                    console.log(char)
                }else {
                    return false
                }
            }else{stack.push(char) }
            
        }
        console.log(stack)
        return stack.length === 0
    }
}

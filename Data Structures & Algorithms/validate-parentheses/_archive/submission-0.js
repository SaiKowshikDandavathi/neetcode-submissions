class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closeToOpen = {
            ")" : "(",
            "}": "{",
            "]": "["
        }
        const stack = []

        for (let char of s){
            if(closeToOpen[char]){
                if(closeToOpen[char] === stack[stack.length -1]){
                    stack.pop()
                } else {
                    return false
                }
            }else{
                stack.push(char)
            }
        }
        return stack.length === 0

    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let index = 0;
        while (index < s.length) {
            const char = s[index];
            let prev;
            if (char === "]" || char === "}" || char === ")") {
                prev = stack.length ? stack.pop() : null;
                if (!prev || prev !== mapping[char]) return false;
            } else {
                stack.push(char);
            }
            index++;
            console.log(stack, index)
        }
        return !stack.length;
    }
}

const mapping = {
    "]": "[",
    "}": "{",
    ")": "(",
};

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

            if (closing.includes(char)) {
                if (stack.pop() !== mapping[char]) return false;
            } else {
                stack.push(char);
            }
            index++;
        }
        return !stack.length;
    }
}

const mapping = {
    "]": "[",
    "}": "{",
    ")": "(",
};
const closing = ["]", "}", ")"];

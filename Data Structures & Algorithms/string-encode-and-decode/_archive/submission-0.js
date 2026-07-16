class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedValue = '';
        for(const str of strs){
            encodedValue += `${str.length}#${str}`
        }
        return encodedValue;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        /**need a way to know the char and the next char*/
        let i = 0;
        
        while(i < str.length){
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let len = Number(str.substring(i, j));
            let word = str.substring(j + 1, j + 1 + len);
            res.push(word);
            i = j + 1 + len;

        }
        return res
    }
}

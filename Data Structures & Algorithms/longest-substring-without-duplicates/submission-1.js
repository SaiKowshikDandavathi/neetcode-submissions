class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Set();
        let l = 0;
        let max = 0;

        for(let r = 0; r < s.length; r++){
            let char = s[r];
            while(charSet.has(char)){
                charSet.delete(s[l]);
                l++;
            }
            charSet.add(char);
            max = Math.max((r-l) + 1,max)
        } return max
    }
}

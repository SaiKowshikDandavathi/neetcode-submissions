class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLen = 0;
        const res = new Set();
        for (let i = 0; i < s.length; i++){
            let cur = s[i];
            while(res.has(cur)){
                let next = res.values().next().value;
                res.delete(next);
            }
            res.add(cur);
            maxLen = Math.max(maxLen,res.size);
        }
        return maxLen;
    }
}

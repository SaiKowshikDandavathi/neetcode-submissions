class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const stringMap = new Map();
        for(const char of s){
            stringMap.set(char, (stringMap.get(char)|| 0)+1);
        }

        for(const char of t){
            const value = stringMap.get(char) || 0;

            if(!value){
                return false
            }
            stringMap.set(char,stringMap.get(char)-1);
            if(stringMap.get(char)=== 0){
                stringMap.delete(char)
            }
        }
        return stringMap.size === 0 ? true : false
    }
}

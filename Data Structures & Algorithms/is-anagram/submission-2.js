class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sMap = new Map();
        for (let i = 0; i < s.length; i++){
            let key = s[i];
            let keyVal = sMap.get(key) || 0;
            keyVal = keyVal + 1;
            sMap.set(key, keyVal);
        }

        for(let j = 0; j < t.length; j++){
            let key = t[j];
            let keyVal = sMap.get(key) || 0;
            if(keyVal === 0) return false;
            keyVal = keyVal - 1;
            sMap.set(key, keyVal);
            if(keyVal === 0){
                sMap.delete(key);
            }
        }
        return sMap.size === 0
    }
}

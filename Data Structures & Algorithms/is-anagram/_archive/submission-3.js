class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length || s.length === 0 || t.length === 0 ) return false

        let sDict = this.buildDict(s);
        
        for(let val of t){
            let keyVal = sDict.get(val) || 0;
            if(!keyVal) return false;
            keyVal = keyVal - 1;
            sDict.set(val, keyVal);
            if(keyVal === 0) sDict.delete(val); 
        }
        return sDict.size === 0;

    }

    buildDict(arr){
        const dict = new Map();
        for(let val of arr){
            const value = dict.get(val) || 0;
            dict.set(val, value + 1)
        }
        return dict
    }
}

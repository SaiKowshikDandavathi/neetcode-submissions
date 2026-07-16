class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length === 0) return [[""]]
        let hashMap = new Map();

        for (let str of strs){
            let sortedValue =  str.split("").sort().join("");
            let value = hashMap.get(sortedValue) || [];
            value.push(str);
            hashMap.set(sortedValue, value);
        }
        return [...hashMap].map(ele => ele[1]);
    }
}

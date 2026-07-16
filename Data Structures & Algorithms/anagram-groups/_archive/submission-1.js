class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    /**
     * sort the strings, place in map
     */
    groupAnagrams(strs) {
        if(strs.length === 0) return [""]

        const map = new Map();

        for (const str of strs){
            const sortedStr = str.split("").sort().join("");
            let mapValue = map.get(sortedStr) || [];
            mapValue.push(str);
            map.set(sortedStr, mapValue)
        }
        return [...map].map(e => e[1])
    }

}

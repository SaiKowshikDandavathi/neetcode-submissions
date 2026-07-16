/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/**
   can sort the characters in array element and compare
 */
var groupAnagrams = function (strs) {
    const hmap = new Map();

    for (let str of strs) {
        const key = str.split("").sort().join("");
        if (!hmap.has(key)) hmap.set(key, []);
        let val = hmap.get(key)
        val.push(str)
        hmap.set(key, val)
    }
    return [...hmap].map(ele => ele[1])

};
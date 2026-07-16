/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = new Set();
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.add(s[i])
        } else {
            maxLength = Math.max(maxLength, map.size)
            while (map.has(s[i])) {
                map.delete(map.values().next().value)
            }
            map.add(s[i])
        }
        maxLength = Math.max(maxLength, map.size)
    }

    return maxLength

};
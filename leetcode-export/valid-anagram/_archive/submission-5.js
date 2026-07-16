/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (!s || !t || s.length !== t.length) return false
    let sMap = new Map();
    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    }

    for (let j = 0; j < t.length; j++) {
        let cur = t[j];
        if (sMap.has(cur)) {
            sMap.set(cur, sMap.get(cur) - 1);
            if (sMap.get(cur) === 0) sMap.delete(cur);
        } else {
            return false
        }
    }
    return sMap.size === 0

};
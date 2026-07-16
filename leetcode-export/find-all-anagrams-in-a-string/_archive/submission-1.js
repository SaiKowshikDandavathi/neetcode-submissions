/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    if (!s || !p || s.length < p.length) return [];
    let pCount = new Map();
    let sCount = new Map();
    let result = [];

    for (let j = 0; j < p.length; j++) {
        pCount.set(p[j], (pCount.get(p[j]) || 0) + 1);
        sCount.set(s[j], (sCount.get(s[j]) || 0) + 1);
    }

    if (areMapsEqual(pCount, sCount)) result.push(0);

    for (let i = p.length; i < s.length; i++) {
        let cur = s[i];
        let removedChar = s[i - p.length];

        sCount.set(removedChar, sCount.get(removedChar) - 1);
        if (sCount.get(removedChar) === 0) sCount.delete(removedChar);

        sCount.set(cur, (sCount.get(cur) || 0) + 1);

        if (areMapsEqual(pCount, sCount)) {
            result.push(i - p.length + 1)
        }
    }
    return result

};

function areMapsEqual(map1, map2) {

    if (map1.size != map2.size) {
        return false
    }

    for (let [key, value] of map1) {
        if (!map2.has(key) || map2.get(key) != value) {
            return false
        }
    }

    return true

}

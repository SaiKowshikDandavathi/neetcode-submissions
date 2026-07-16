/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */

/**
       Create a hashmap of the second string s
       Loop through the str 1 and push the elements into result
       If there are still strings in the hashmap, append them at last
 */
var customSortString = function (order, s) {
    const hmap = new Map();
    let res = []

    for (let i = 0; i < s.length; i++) {
        hmap.set(s[i], (hmap.get(s[i]) || 0) + 1)
    }

    for (let j = 0; j < order.length; j++) {
        if (!hmap.has(order[j])) continue
        while (hmap.get(order[j]) > 0) {
            res.push(order[j])
            hmap.set(order[j], hmap.get(order[j]) - 1)
        }
        hmap.delete(order[j])
    }

    for (let [key] of hmap) {
        while (hmap.get(key) > 0) {
            res.push(key)
            hmap.set(key, hmap.get(key) - 1)
        }
        hmap.delete(key)
    }
    //console.log(res)
    //console.log(hmap)

    return res.join("")
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = {};
    let out = [];
    for (let n of nums) {
        if (!map[n]) {
            map[n] = 1
        }
        else {
            map[n]++
        }
    }
    const entries = Object.entries(map);
    entries.sort((a, b) => b[1] - a[1]);
    for (let i =0; i < k; i++ ) {
      out.push(entries[i][0])
    }
    return out
};
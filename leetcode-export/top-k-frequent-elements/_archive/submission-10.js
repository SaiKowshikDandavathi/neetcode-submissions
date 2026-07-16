/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let hm = new Map();
    nums.forEach(num => {
        hm.set(num, (hm.get(num) || 0) + 1);
    });

    let temp = [];
    for (let [num, count] of hm) {
        temp.push([count, num]);
    }

    temp.sort((a, b) => b[0] - a[0]);

    return temp.slice(0, k).map(item => item[1]);
};
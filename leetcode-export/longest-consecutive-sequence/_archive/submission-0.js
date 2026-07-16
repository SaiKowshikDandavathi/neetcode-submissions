/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    /**
        * Hashmap to map the elements, get min and max in same loop
        * An array to map the seen
     */

    if (!nums) return 0

    let map = new Set(nums);

    let maxCount = 0;

    for (let num of map) {
        if (!map.has(num - 1)) {
            let currentStreak = 1;
            while (map.has(num + 1)) {
                currentStreak += 1;
                num = num + 1;
            }
            maxCount = Math.max(currentStreak, maxCount);
        }
    }
    return maxCount

};
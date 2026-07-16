/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * create a hashmap with the elements in array, look if the difference of target - array element is already in the hashmap, if yes, return the index
 */
var twoSum = function (nums, target) {

    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let eleNeeded = target - nums[i]
        if (map.has(eleNeeded)) {
            return [map.get(eleNeeded), i]
        }
        map.set(nums[i],i)
    }
};
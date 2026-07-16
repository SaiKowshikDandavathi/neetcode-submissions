/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const hmap = {}
    for(let i =0; i< nums.length;i++){

        let diff = target - nums[i]
        if(diff in hmap) return [i,hmap[diff]]

        hmap[nums[i]] = i
        
    }
    
};
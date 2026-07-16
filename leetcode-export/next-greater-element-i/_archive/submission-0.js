/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/**
   - Brute force
       - Hashmap 2nd array to get index or use indexOf
       - Initialize 2 pointers i and j, for every element of i, loop over in j
       - Time complexity will be O(n * m)
 
 */
var nextGreaterElement = function (nums1, nums2) {
    let j = 0;
    let res = [];

    for (let i = 0; i < nums1.length; i++) {
        let cur = nums1[i];
        let indexInSecond = nums2.indexOf(cur);
        for (let j = indexInSecond; j < nums2.length; j++) {
            if (cur < nums2[j]) {
                res.push(nums2[j]);
                break;
            }
            if(j === nums2.length - 1) res.push(-1)
        }
    }
    return res;


};
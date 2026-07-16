/**
 * @param {number[]} height
 * @return {number}
 */

/**
   Two Pointers, take min height of both the pointers and store in a new variable
 
 */
var maxArea = function (height) {

    let left = 0;
    let right = height.length - 1;
    let max = 0;
    let capacity;

    while (left < right) {
        capacity = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(max, capacity);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;

};
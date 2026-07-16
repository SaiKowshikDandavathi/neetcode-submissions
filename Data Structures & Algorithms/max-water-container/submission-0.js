class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if(heights.length === 0) return 0;
        let maxArea = 0;
        let left = 0;
        let right = heights.length - 1;

        while(left < right){
            let length = Math.min(heights[left], heights[right]);
            let breadth = right -left;
            let curArea = length * breadth;
            maxArea = Math.max(curArea,maxArea);
            if(heights[left] > heights[right]) right--;
            else left++;
        }
        return maxArea;
    }
}

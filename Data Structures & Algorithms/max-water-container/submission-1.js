class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if(!heights || heights.length === 0) return 0
        let start = 0, end = heights.length - 1;
        let max = 0;
        while(start < end){
            let min = Math.min(heights[start], heights[end]);
            let area = min * (end - start);
            max = Math.max(max,area);
            if(heights[start] < heights[end]){
                start++
            } else {
                end--
            }
        }
        return max
    }
}

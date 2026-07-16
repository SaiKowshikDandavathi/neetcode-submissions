class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];


        function makeCombinations(index,comb){
            if(index >= nums.length){
                res.push([...comb])
                return;
            }
            comb.push(nums[index]);
            makeCombinations(index + 1, comb);
            comb.pop();
            makeCombinations(index + 1, comb);
        }
        makeCombinations(0,[]);
        return res
    }
}

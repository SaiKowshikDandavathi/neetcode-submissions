class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = []

        function makeCombinations(open,close,current){
            if(current.length === 2 * n){
                res.push(current)
                return
            }

            if(open < n){ 
               makeCombinations(open + 1, close, current + "(");
            }
            

            if(close < n && close < open) {
               makeCombinations(open, close + 1,  current + ")");
            }
        }
        makeCombinations(0,0,"")
        return res
    }
}

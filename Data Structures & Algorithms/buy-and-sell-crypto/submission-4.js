class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(!prices || prices.length === 0) return 0;
        let maxProfit = 0;
        let buy = prices[0];
        for(let i = 1; i < prices.length; i++){
            let profit = prices[i] - buy;
            maxProfit = Math.max(profit, maxProfit);
            buy = Math.min(prices[i], buy);
        }
        return maxProfit
    }
}

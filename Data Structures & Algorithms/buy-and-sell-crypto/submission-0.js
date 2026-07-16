class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyPrice = Infinity;
        let profit = 0;
        for(const price of prices){
            profit = Math.max(profit, price - buyPrice);
            buyPrice = Math.min(price,buyPrice);
        }
        return profit;
    }
}

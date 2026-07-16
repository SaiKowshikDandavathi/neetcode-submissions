class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyPrice = Infinity;
        let maxProfit = 0;

        for (const price of prices){
            maxProfit = Math.max(price - buyPrice, maxProfit);
            buyPrice = Math.min(price,buyPrice);
        }
        return maxProfit;
    }
}

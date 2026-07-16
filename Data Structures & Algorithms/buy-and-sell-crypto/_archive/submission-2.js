class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyPrice = Infinity;
        let maxProfit = 0;

        for (const price of prices){
            if(price < buyPrice) buyPrice = price;
            maxProfit = Math.max(price - buyPrice, maxProfit);
        }
        return maxProfit;
    }
}

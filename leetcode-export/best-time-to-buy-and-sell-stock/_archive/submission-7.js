/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 0) return 0;
    let max = 0;
    let buyPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {

        max = Math.max(prices[i] - buyPrice, max);

        if (buyPrice > prices[i]) {
            buyPrice = prices[i];
        }

    }

    return max;
};
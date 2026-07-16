/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = Infinity;
    let profit = 0;

    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        if (minPrice != price) {
            profit = Math.max(profit, price - minPrice);
        }
    }
    return profit;

};
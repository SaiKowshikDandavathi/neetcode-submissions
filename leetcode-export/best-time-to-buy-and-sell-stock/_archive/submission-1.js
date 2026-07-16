/**
 * @param {number[]} prices
 * @return {number}
 * Preset profit to 0, run a loop and calculate the difference between current element and one element before the loop, set profit to max of profit and this difference
 */
var maxProfit = function (prices) {
    let profit = 0
    let buyPrice = prices[0]
    for (let i = 1; i < prices.length; i++) {
        if (buyPrice > prices[i]) {
            buyPrice = prices[i]
        }
        profit = Math.max(profit, prices[i] - buyPrice)
    }
    return profit

};
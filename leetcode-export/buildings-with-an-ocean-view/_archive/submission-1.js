/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function (heights) {
    let n = heights.length - 1
    let max = heights[n];
    let stack = []
    stack.push(n)

    for (let i = n - 1; i >= 0; i--) {
        if (max < heights[i]) {
            stack.push(i)
        }
        max = Math.max(max, heights[i])
    }
    return stack.sort((a, b) => a - b);

};
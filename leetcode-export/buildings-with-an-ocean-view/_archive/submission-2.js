/**
 * @param {number[]} heights
 * @return {number[]}
 */

/**
    If we go from the order from ocean, result has to be sorted

 */
var findBuildings = function (heights) {

    if (heights.length === 0) return [];
    let maxHeight = heights[heights.length - 1];
    let res = [];
    res.push(heights.length - 1)

    for (let i = heights.length - 2; i >= 0; i--) {

        if (heights[i] > maxHeight) {
            res.push(i)
        }
        maxHeight = Math.max(maxHeight, heights[i]);
    }

    return res.sort((a,b)=> a-b);

};
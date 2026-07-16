/**
 * @param {number[]} heights
 * @return {number[]}
 */

/**
    If we go from the order from ocean, result has to be sorted

 */
var findBuildings = function (heights) {

    if (heights.length === 0) return [];
    let maxHeight = 0;
    let res = [];

    for (let i = heights.length - 1; i >= 0; i--) {

        if (heights[i] > maxHeight) {
            res.unshift(i);
        }
        maxHeight = Math.max(maxHeight, heights[i]);
    }

    return res

};
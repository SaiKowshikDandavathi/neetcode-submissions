/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const isNegativeNumber = x < 0 ? true : false
    x = Math.abs(x).toString().split("");
    let left = 0
    let right = x.length - 1;

    while (left < right) {
        [x[left], x[right]] = [x[right], x[left]]
        left++;
        right--;
    }
    let res = isNegativeNumber ? -Number(x.join("")) : Number(x.join(""));
    return (res > Math.pow(2, 31) || res < Math.pow(-2, 31)) ? 0 : res

};
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    s = s.split("")
    const swap = (arr, ele1, ele2) => {
        [arr[ele1], arr[ele2]] = [arr[ele2], arr[ele1]];
    };
    for (let i = 0; i < s.length; i += (k * 2)) {
        let left = i;
        let right = Math.min(i + k - 1, s.length - 1);
        while (left < right) {
            swap(s, left, right)
            left++;
            right--;
        }
    }
    return s.join("")
};
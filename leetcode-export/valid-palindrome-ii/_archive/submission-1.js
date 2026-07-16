/**
 * @param {string} s
 * @return {boolean}
 */

/**
    Create a recurring function

 */
var validPalindrome = function (s, left = 0, right = s.length - 1, isItemRemoved = false) {
    while (left < right) {
        if (s[left] !== s[right]) {
            if (isItemRemoved) return false
            isItemRemoved = true;
            return validPalindrome(s, left + 1, right, isItemRemoved) || validPalindrome(s, left, right - 1, isItemRemoved)
        }
        left++;
        right--;
    } return true

};
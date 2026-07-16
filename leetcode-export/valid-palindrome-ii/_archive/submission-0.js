/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s, start = 0, end = s.length - 1, isElementDeleted = false) {
        /*make this a recurrsion, since we can delete one element from either begionning or from the end, we have to look for at least one true */
    while (start < end) {
        if (s[start] !== s[end]) {
            if (isElementDeleted) return false // this only runs after 2 non equals
            return validPalindrome(s, start + 1, end, true) || validPalindrome(s, start, end - 1, true)
        }
        start++;
        end--;
    } return true
};


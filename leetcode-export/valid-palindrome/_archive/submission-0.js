/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^A-Z0-9]+/ig, "").toLowerCase();
    let maxLength = str.length -1
    for (i=0;i < s.length/2 ;i ++){
        if(str[i]!==str[maxLength - i]){
            return false
        }
    } return true   
};


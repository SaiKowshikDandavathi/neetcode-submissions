class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        let left = 0;
        let right = s.length - 1;

        while(left < right){
            while(left < right && !this.isAlphaNumeric(s[left])){
                left++;
            }
            while(left < right && !this.isAlphaNumeric(s[right])){
                right--;
            }
            if(s[left] !== s[right]) return false
            left++;
            right--;
        }
        return true
    }
    isAlphaNumeric(c){
        return (
                (c >= "a" && c <= "z") || 
                (c >= "A" && c <= "Z") || 
                (c >= "0" && c <= "9")
            )
    }
}



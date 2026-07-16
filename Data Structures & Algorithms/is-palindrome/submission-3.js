class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let text = s.toLowerCase();

        let left = 0;
        let right = text.length - 1;
        while(left < right){
            while(left < right && !this.isAlphaNumeric(text[left])){
                left++
            }
            while(left < right && !this.isAlphaNumeric(text[right])){
                right--;
            }
            if(text[left] === text[right]){
                left++;
                right--; 
            } else {
                console.log(text[left], text[right],left,right)
                return false
            }

        } return true
        
    }

    isAlphaNumeric(char){
        return ((char >= "a" && char <= "z") 
                || (char >= "A" && char <= "Z")
                || (char >= "0" && char <= "9"))
    }
}

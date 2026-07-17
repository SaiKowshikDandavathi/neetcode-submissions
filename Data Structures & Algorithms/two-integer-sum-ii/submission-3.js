class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        if (!numbers || numbers.length === 0 ) return [];
        let lo = 0, high = numbers.length - 1;
        while(lo < high){
            if(numbers[lo] + numbers[high] === target) return [lo + 1, high + 1]
            if(numbers[lo] + numbers[high] > target){
                high--
            } else {
                lo++
            }
        }
        return []
    }
}

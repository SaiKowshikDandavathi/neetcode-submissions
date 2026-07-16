/**
 * @param {string} s
 * @return {number}
 create a hash map, 
 assign a max variable to keep a track of iterations
 if there is element in the hashmap, do a maximum of count and max element, reset the hashmap
 return max
 */
var lengthOfLongestSubstring = function (s) {

    let max = 0;
    let arr = s.split("");
    let hmap = new Map();

    for (let start = 0, end = 0; end < arr.length; end++) {
        let char = arr[end];
        let charCount = hmap.get(char) || 0;
        while (start <= end && charCount > 0) {
            let element = arr[start]
            let eleCount = hmap.get(arr[start])
            if (eleCount === 0) hmap.delete(element)
            else hmap.set(element, eleCount - 1)
            charCount = hmap.get(char)
            start++;
        }
        hmap.set(char, 1);
        max = Math.max(max, end + 1 - start)

    }
    return max
};
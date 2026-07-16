/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const swap =(arr, startIndex, endIndex) =>{
        [arr[startIndex], arr[endIndex]] = [arr[endIndex], arr[startIndex]]
    }
    let startIndex = 0
    for(let i = s.length-1 ; i >= 0 && i > startIndex; i--){
        swap(s,startIndex,i)
        startIndex++    
    } return s
};


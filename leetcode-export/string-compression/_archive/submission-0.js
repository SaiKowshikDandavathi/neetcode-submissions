/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {

    let read = 0;
    let write = 0;

    while(read < chars.length){
        let char = chars[read];
        let count = 0;
        while(read < chars.length && char === chars[read]){
            read++;
            count++;
        }
        chars[write++] = char;
        if(count > 1){
            for(let digit of count.toString()){
                chars[write++] = digit;
            }
        }
    }
    console.log(chars);

    return write
    
};
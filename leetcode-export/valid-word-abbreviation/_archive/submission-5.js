/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */

/**
 * This can be solved by stacks
 * 
 */

/**
  Have 2 pointers i and j to check the char at word and abbr
  If you encounter a number, add it to a stack
  if you encounter a word, pop the stack, convert to a number and move the pointer of word and abbr
 */
var validWordAbbreviation = function (word, abbr) {
    if (!word || !abbr || abbr.length > word.length) return false

    let i = 0;
    let j = 0;
    let num = 0;

    while (i <= abbr.length && j < word.length) {

        if(!isNaN(abbr[i])){
            num = num * 10 + Number(abbr[i]);
            if(num === 0) return false;
            i++;
        } else if (num > 0){
            j += num;
            num = 0;
        } else if(abbr[i]=== word[j]){
            i++;
            j++;
        } else {
            return false;
        }


    }

    return i === abbr.length && j === word.length;

};
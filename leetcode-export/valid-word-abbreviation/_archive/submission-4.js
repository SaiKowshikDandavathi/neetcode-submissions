/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */

/**
   - Loop through until both word and abbr are in bounds
   - For every loop, look at input and increment the i and j based on the values
 */
var validWordAbbreviation = function (word, abbr) {
    let i = 0;
    let j = 0;
    let number = 0;

    while (i <= abbr.length && j < word.length) {
        // console.log(i, abbr[i], j, word[j])

        if (!isNaN(abbr[i])) {
            number = number * 10 + Number(abbr[i]);
            if (number === 0) return false;
            i++;
        } else if (number > 0) {
            j = j + number
            number = 0;
        } else if (abbr[i] === word[j]) {
            i++;
            j++;
        } else {
            // console.log(i, abbr[i], j, word[j])
            return false
        }

    }

    return (i === abbr.length && j === word.length)

};
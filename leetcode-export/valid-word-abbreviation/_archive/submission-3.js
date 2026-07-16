var validWordAbbreviation = function (word, abbr) {
    /**
    Take a word, count the digits after the 
     */

    let number = 0
    let i = 0
    let j = 0
    console.log(abbr.length,word.length )
    while (i <= abbr.length && j < word.length) {

        if (!isNaN(abbr[i])) {
            number = number * 10 + Number(abbr[i])
            if (number === 0) return false;
            i++;
        }
        else if (number > 0) {
            j += number;
            number = 0;
        }
        else if (abbr[i] == word[j]) {
            i++;
            j++;
        }
        else {
            return false;
        }

    }

    console.log(i,j)

    return i === abbr.length && j === word.length

};
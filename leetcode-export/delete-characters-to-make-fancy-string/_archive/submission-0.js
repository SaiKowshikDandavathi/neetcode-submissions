/**
 * @param {string} s
 * @return {string}
 */

/**
 * have a counter to check
 * have a max letter (k) to replace the strings in place
 */
var makeFancyString = function (s) {
    if (!s) return null
    let k = 1;
    let count = 1;
    let prev = s[0];
    let newValue = s[0];

    for (let i = 1; i < s.length; i++) {
        let cur = s[i];
        if (cur === prev) ++count;
        else count = 1;

        if (count <= 2) {
            newValue += cur;
        }
        prev = cur;
    }
    return newValue
};
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {

    let carry = 0;
    let sum = ''

    for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0 || carry > 0; i--, j--) {
        const digit1 = i < 0 ? 0 : num1.charAt(i) - '0';
        const digit2 = j < 0 ? 0 : num2.charAt(j) - '0';

        console.log(digit1, digit2)
        const digitSum = digit1 + digit2 + carry;
        sum = `${digitSum % 10}${sum}`
        carry = Math.floor(digitSum / 10)
    }
    return sum

};


/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Algorithm is correct and optimal — O(max(n, m)) time, O(max(n, m))
 *   space for the result string, which is the best possible since the
 *   output size is proportional to input size. Correctly handles
 *   differing-length strings and a final leftover carry.
 * - Leaves a `console.log(digit1, digit2)` debug statement inside the hot
 *   loop — this should not ship in reviewed/interview-ready code.
 * - String concatenation with template literals (`sum = \`${digitSum % 10}${sum}\``)
 *   inside a loop is O(n) per operation in many engines, making the total
 *   cost O(n^2) in the worst case rather than O(n); building an array of
 *   digits and joining/reversing once at the end avoids this.
 *
 * Areas of improvement:
 * - Remove the `console.log`.
 * - Push digits to an array and `.reverse().join('')` once at the end
 *   instead of repeated string prepending.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var addStrings = function (num1, num2) {
    const digits = [];
    let carry = 0;

    for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0 || carry > 0; i--, j--) {
        const digit1 = i >= 0 ? num1.charCodeAt(i) - 48 : 0;
        const digit2 = j >= 0 ? num2.charCodeAt(j) - 48 : 0;

        const digitSum = digit1 + digit2 + carry;
        digits.push(digitSum % 10);
        carry = Math.floor(digitSum / 10);
    }

    return digits.reverse().join('');
};
*/

/**
 * @param {string} digits
 * @return {string[]}
 */

/*
- Define an object with key as the number and letter options in an array corresponding to that number
- If the digit length is 1, return the array of letter for that element
- If the digits length is greater than 1, do the permutations 
- If the digits length greater than 2, do subset

*/
var letterCombinations = function (digits) {

    if(digits.length===0){
        return []
    }

    let letters = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }

    let combinations = [];
    const createSubSet = (index, subset = []) => {

        if (subset.length === digits.length) {
            // console.log(subset)
            // console.log("---------")
            combinations.push(subset.join(""))
            return
        }

        let possibleLetters = letters[digits[index]]

        // console.log(index, [digits[index]], possibleLetters)

        for (let letter of possibleLetters) {
            subset.push(letter)
            // console.log(index, "Before Pop", subset)
            createSubSet(index + 1, subset)
            subset.pop()
            // console.log(index, "After Pop", subset)

        }

    }
    createSubSet(0)

    return combinations;

};

// For a

//     For each letter in def
//     - push d
//     - add to result ['ad']
//     - pop d

// - remove a

// for b

/* ============================================================
 * REVIEW — Rating: 5/10
 *
 * Why this isn't perfect:
 * - The function is named `createSubSet` but it generates
 *   *combinations* (Cartesian product across positions), not subsets —
 *   misleading naming that would cost clarity points in an interview.
 * - Six leftover commented-out `console.log` debug lines inside the
 *   recursive helper, plus a 9-line trailing comment block manually
 *   tracing through the "a" branch by hand at the bottom of the file —
 *   all dead scratch work that should be removed before this is
 *   considered final.
 * - The header comment describes a vague, slightly incorrect plan
 *   ("If the digits length is greater than 2, do subset") that doesn't
 *   match what the code actually does (uniform backtracking regardless
 *   of length).
 * - Algorithmically this is already optimal: O(4^n * n) time (up to 4
 *   letters per digit, n digits, n to build each string) and O(n)
 *   recursion depth — correct and standard.
 *
 * Areas of improvement:
 * - Rename `createSubSet` to something accurate like `backtrack` or
 *   `buildCombinations`.
 * - Delete all commented-out `console.log` lines and the trailing
 *   hand-trace comment block.
 * - Replace the speculative header comment with a one-line accurate
 *   description of the backtracking approach.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];

    const letters = {
        2: "abc", 3: "def", 4: "ghi", 5: "jkl",
        6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz",
    };

    const result = [];

    // Backtracking: build one combination at a time, one digit's
    // letter per recursion level. O(4^n * n) time, O(n) recursion depth.
    function backtrack(index, current) {
        if (index === digits.length) {
            result.push(current.join(""));
            return;
        }
        for (const letter of letters[digits[index]]) {
            current.push(letter);
            backtrack(index + 1, current);
            current.pop();
        }
    }

    backtrack(0, []);
    return result;
};
*/
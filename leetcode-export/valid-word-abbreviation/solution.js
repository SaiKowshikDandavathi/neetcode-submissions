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

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - The logic is correct O(n) two-pointer: it accumulates multi-digit
 *   numbers (`num * 10 + Number(abbr[i])`), rejects leading zeros
 *   (`if (num === 0) return false`), and the `i <= abbr.length` loop
 *   bound is a subtle-but-correct trick that lets a trailing digit
 *   run get flushed into `j` on the final iteration without a
 *   separate post-loop step.
 * - The header comments are actively misleading: they say "This can
 *   be solved by stacks" and describe pushing digits onto a stack,
 *   but the actual implementation never uses a stack — it's a plain
 *   running-integer two-pointer scan. Stale/wrong comments like this
 *   are worse than no comments in an interview setting.
 * - `!isNaN(abbr[i])` is a loose way to detect a digit character —
 *   it happens to work because `abbr` only ever contains digits and
 *   lowercase letters per the problem constraints, but `isNaN` also
 *   accepts things like `""`, `" "`, and `"1e5"`, so it's not a
 *   precise digit check in general.
 *
 * Areas of improvement:
 * - Delete/rewrite the stale "solved by stacks" comments to match
 *   what the code actually does.
 * - Use an explicit digit check like `abbr[i] >= '0' && abbr[i] <= '9'`
 *   instead of `!isNaN(...)` for clarity and precision.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var validWordAbbreviation = function (word, abbr) {
    let i = 0;
    let j = 0;

    while (i < abbr.length && j < word.length) {
        const ch = abbr[i];

        if (ch >= '0' && ch <= '9') {
            if (ch === '0') return false; // leading zero not allowed
            let num = 0;
            while (i < abbr.length && abbr[i] >= '0' && abbr[i] <= '9') {
                num = num * 10 + Number(abbr[i]);
                i++;
            }
            j += num;
        } else {
            if (word[j] !== ch) return false;
            i++;
            j++;
        }
    }

    return i === abbr.length && j === word.length;
};
*/
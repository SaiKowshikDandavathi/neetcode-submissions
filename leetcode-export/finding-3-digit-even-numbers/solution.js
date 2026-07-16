/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
    digits.sort((a, b) => a - b)
    let res = new Map()

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] !== 0) {
            for (let j = 0; j < digits.length; j++) {
                if (i != j) {
                    for (let k = 0; k < digits.length; k++) {
                        if (j != k && k != i) {
                            if (digits[k] % 2 === 0) {
                                let digit = `${digits[i]}${digits[j]}${digits[k]}`
                                if (!res.get(digit)) {
                                    res.set(digit, 1)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return [...res].map(e => e[0])
};

/* ============================================================
 * REVIEW — Rating: 4/10
 *
 * Why this isn't perfect:
 * - Real bug: `digit` is built as a template-literal string
 *   (`` `${digits[i]}${digits[j]}${digits[k]}` ``) and stored as the
 *   Map key. `return [...res].map(e => e[0])` returns those string
 *   keys unconverted, so the function returns `["102", "120", ...]`
 *   instead of `[102, 120, ...]`. The declared return type is
 *   `number[]`; this would fail a strict equality check against the
 *   expected numeric array.
 * - Triple-nested loop is O(n^3) where n = digits.length (up to 100),
 *   which is far more work than necessary — the digit alphabet is only
 *   0-9, so a frequency-count approach (O(n) to count + O(1) to scan
 *   ~450 possible 3-digit even numbers) is both simpler and faster.
 * - `res` is a `Map` used only for its key set (values are always the
 *   literal `1` and never read) — a `Set` says the same thing more
 *   directly.
 * - `if (!res.get(digit))` is a roundabout way to say "if not already
 *   present"; reads as a truthiness check on a value that's either
 *   `undefined` or `1`, which works but obscures intent versus
 *   `!res.has(digit)`.
 *
 * Areas of improvement:
 * - Convert the key back to a number before returning: `Number(e[0])`
 *   or build the key as a number outright (e.g. `digits[i]*100 +
 *   digits[j]*10 + digits[k]`).
 * - Replace the O(n^3) triple loop with a digit-frequency-count
 *   approach for O(n) counting + O(1) generation.
 * - Swap `Map` for `Set` and `!res.get(digit)` for `!res.has(digit)`.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var findEvenNumbers = function (digits) {
    // Digits only range 0-9, so count occurrences once (O(n)), then
    // try every 3-digit even number in range and check feasibility
    // against the counts (O(1) — at most 450 * 3 checks).
    const count = new Array(10).fill(0);
    for (const d of digits) count[d]++;

    const result = [];

    for (let num = 100; num < 1000; num += 2) {
        const d1 = Math.floor(num / 100);
        const d2 = Math.floor(num / 10) % 10;
        const d3 = num % 10;

        const need = new Array(10).fill(0);
        need[d1]++;
        need[d2]++;
        need[d3]++;

        let ok = true;
        for (let d = 0; d < 10; d++) {
            if (need[d] > count[d]) {
                ok = false;
                break;
            }
        }
        if (ok) result.push(num);
    }

    return result;
};
*/
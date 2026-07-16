/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

/* ============================================================
 * REVIEW — Rating: 10/10
 *
 * Why this isn't perfect:
 * - Nothing meaningful to flag. This is the whole solution: a
 *   closure factory returning a function that always yields
 *   "Hello World", O(1) time and space, matching the LeetCode
 *   calling convention exactly.
 *
 * Areas of improvement:
 * - Purely optional nit: `...args` is unused since the inner
 *   function ignores its arguments — could be `function() {...}`
 *   instead, but keeping `...args` communicates "accepts any args,
 *   ignores them all" just as clearly.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var createHelloWorld = function () {
    return function (...args) {
        return "Hello World";
    };
};
*/
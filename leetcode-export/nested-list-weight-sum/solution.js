/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */

// flatten the array
//increment the depth by 1 if its an array
// push the value * depth to res array
// reduce the response array
var depthSum = function (nestedList) {
    return dfs(nestedList, 1)

};

var dfs = function (nestedList, depth) {
    let sum = 0;

    for (let i = 0; i < nestedList.length; i++) {
        if (nestedList[i].isInteger()) {
            sum += nestedList[i].getInteger() * depth
        } else {
            sum += dfs(nestedList[i].getList(), depth + 1)
        }
    } return sum
}

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct and optimal: single DFS pass over every integer/list is
 *   O(n) where n is the total number of nested elements, which is the
 *   best achievable since every element must be visited.
 * - The four-line comment block above `depthSum`
 *   (`// flatten the array`, `//increment the depth by 1...`, etc.)
 *   describes a "flatten then reduce" approach that isn't what's
 *   actually implemented — the real implementation is a direct
 *   recursive depth accumulation. Leftover planning notes that don't
 *   match the code are misleading to a reader/reviewer.
 *
 * Areas of improvement:
 * - Delete or rewrite the stale planning comments so they describe
 *   the actual recursive-DFS implementation.
 * - `dfs` is declared as a second top-level function; nesting it
 *   inside `depthSum` (or making it a closure) would avoid polluting
 *   the outer scope with a helper name.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var depthSum = function (nestedList) {
    const dfs = (list, depth) => {
        let sum = 0;
        for (const item of list) {
            sum += item.isInteger()
                ? item.getInteger() * depth
                : dfs(item.getList(), depth + 1);
        }
        return sum;
    };

    return dfs(nestedList, 1);
};
*/
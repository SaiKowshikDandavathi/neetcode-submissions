/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let len = 0
    let sum = 0
    let cur = head
    
    while (cur) {
        cur = cur.next
        len++
    }
    while (head) {
        sum += (head.val * Math.pow(2, --len))
        head = head.next
    }
    return sum
}

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Requires two full passes over the list (one to compute `len`,
 *   one to accumulate `sum`), so it's O(n) time with a 2x constant
 *   factor. The single-pass approach (`sum = sum * 2 + node.val`)
 *   achieves the same O(n) time / O(1) space in one traversal.
 * - `Math.pow(2, --len)` recomputes a power on every iteration
 *   instead of using a cheaper running shift/multiply.
 * - Correctly handles the single-node case (`len` becomes 1, loop
 *   runs once) and doesn't need to worry about empty lists since
 *   LeetCode guarantees a non-empty list for this problem.
 *
 * Areas of improvement:
 * - Collapse to a single pass: `sum = sum * 2 + head.val` while
 *   walking the list once.
 * - Avoid `Math.pow` in a hot loop; bit-shifting or repeated
 *   doubling is both simpler and faster.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var getDecimalValue = function (head) {
    let sum = 0;

    while (head) {
        sum = sum * 2 + head.val;
        head = head.next;
    }

    return sum;
};
*/
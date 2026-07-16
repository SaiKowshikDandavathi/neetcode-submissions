/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prevNode = null
    while (head) {
        let nextNode = head.next
        head.next = prevNode
        prevNode = head
        head = nextNode
    }
    return prevNode
};

/* ============================================================
 * REVIEW — Rating: 10/10
 *
 * Why this isn't perfect:
 * - No real flaws — clean naming (`prevNode`/`nextNode`), correctly
 *   handles the empty-list (`head === null`, loop never runs, returns
 *   `null`) and single-node cases, and uses the standard optimal
 *   iterative approach: O(n) time, O(1) extra space.
 *
 * Areas of improvement:
 * - None of substance; this is already the textbook solution.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var reverseList = function (head) {
    let prevNode = null;
    while (head) {
        const nextNode = head.next;
        head.next = prevNode;
        prevNode = head;
        head = nextNode;
    }
    return prevNode;
};
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    for (let i = 0; i < left-1; ++i ){
        prev = prev.next;
    }
    let current = prev.next;
    for (let i = 0; i < right - left; ++i){
        let nextNode = current.next;
        current.next = nextNode.next;
        nextNode.next = prev.next
        prev.next = nextNode
    }
    return dummy.next

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Variable name `current` (vs. the terser `cur` used elsewhere in this
 *   file's sibling problems) is a very minor naming inconsistency, and the
 *   in-loop "head insertion" reversal technique, while correct, takes a
 *   moment to trace through without a comment explaining the relinking.
 *
 * Areas of improvement:
 * - A short comment on the reversal loop (e.g. "move nextNode to the front
 *   of the reversed sub-list") would make the trickier in-place pointer
 *   surgery easier to review at a glance.
 * - Complexity is already optimal: O(n) time (single pass), O(1) extra
 *   space, correctly uses a dummy node to handle `left === 1`.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var reverseBetween = function (head, left, right) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }

    const start = prev.next;
    let then = start.next;

    // Repeatedly move the node right after `start` to just after `prev`.
    for (let i = 0; i < right - left; i++) {
        start.next = then.next;
        then.next = prev.next;
        prev.next = then;
        then = start.next;
    }

    return dummy.next;
};
*/
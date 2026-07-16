/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let length = 0
    let node = head;

    while (node) {
        length++;
        node = node.next
    }
    length -= n;
    node = dummy;

    while (length > 0) {
        node = node.next;
        length--;
    }
    node.next = node.next.next
    return dummy.next;

};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Uses a two-pass approach (one full traversal to compute `length`, a
 *   second to walk to the node before the target). Still O(n) time overall,
 *   but the more common interview-expected technique is a one-pass
 *   fast/slow two-pointer that finds the target node in a single traversal.
 *
 * Areas of improvement:
 * - Rework as a single pass: advance a `fast` pointer `n` steps ahead of a
 *   `slow` pointer (both starting from `dummy`), then move both until
 *   `fast.next` is null, at which point `slow.next` is the node to remove.
 * - Otherwise correct: O(1) extra space, dummy node cleanly handles
 *   removing the head, and it correctly finds the node to skip.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var removeNthFromEnd = function (head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return dummy.next;
};
*/
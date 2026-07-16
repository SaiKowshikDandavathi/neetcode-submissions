/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let res = new ListNode()
    let dummy = res
    let reminder = 0
    let total = 0

    while (l1 || l2 || reminder) {
        total = reminder
        if (l1) {
            total += l1.val
            l1 = l1.next
        }
        if (l2) {
            total += l2.val
            l2 = l2.next
        }
        let num = total % 10
        reminder = Math.floor(total / 10)
        dummy.next = new ListNode(num)
        dummy = dummy.next
    } return res.next

};
/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct and optimal — O(max(n, m)) time, O(max(n, m)) space for the
 *   output list, which is required since the result list length is
 *   proportional to input length. Correctly handles a final carry after
 *   both lists are exhausted (the `|| reminder` loop condition) and lists
 *   of different lengths.
 * - Variable naming is inverted from the usual convention: `res` holds the
 *   sentinel/dummy head node while `dummy` is actually the pointer that
 *   walks forward and gets mutated — normally "dummy" refers to the fixed
 *   sentinel head and something like "curr"/"tail" refers to the moving
 *   pointer. This isn't a bug but reads confusingly on first pass.
 * - "reminder" is a misspelling of "remainder".
 *
 * Areas of improvement:
 * - Rename `res` -> `dummyHead`, `dummy` -> `curr`, and `reminder` -> `carry`
 *   for clarity.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var addTwoNumbers = function (l1, l2) {
    const dummyHead = new ListNode();
    let curr = dummyHead;
    let carry = 0;

    while (l1 || l2 || carry) {
        let total = carry;
        if (l1) { total += l1.val; l1 = l1.next; }
        if (l2) { total += l2.val; l2 = l2.next; }

        carry = Math.floor(total / 10);
        curr.next = new ListNode(total % 10);
        curr = curr.next;
    }

    return dummyHead.next;
};
*/

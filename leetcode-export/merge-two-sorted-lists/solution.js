/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    let mergedList = null;
    let smallerNode = null;
    let currentNode = null;

    if (!list1) return list2;
    if (!list2) return list1;


    while (list1 || list2) {

        if (!list1) {
            currentNode.next = list2;
            break
        }
        if (!list2) {
            currentNode.next = list1;
            break;
        }

        if (list1.val < list2.val) {
            smallerNode = list1;
            list1 = list1.next
        } else {
            smallerNode = list2;
            list2 = list2.next;
        }

        if (!mergedList) {
            mergedList = smallerNode;
            currentNode = mergedList;
        } else {
            currentNode.next = smallerNode;
            currentNode = currentNode.next;
        }


    } return mergedList;

};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct and optimal O(n+m) time, O(1) extra space approach.
 * - Needing three tracking variables (`mergedList`, `currentNode`,
 *   `smallerNode`) plus the two early-return guards and two in-loop
 *   null-checks is more state than the problem requires. The standard
 *   dummy-head pattern removes the "is this the first node?" branch
 *   entirely and reads more directly.
 * - `smallerNode` is only ever used to immediately assign to
 *   `mergedList`/`currentNode.next` — it's an unnecessary layer of
 *   indirection.
 *
 * Areas of improvement:
 * - Use a dummy/sentinel head node so there's no special-casing for
 *   "is the list empty yet."
 * - Drop the `smallerNode` temporary and just advance `tail.next`
 *   directly to `list1` or `list2`.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode(0);
    let tail = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    tail.next = list1 || list2;
    return dummy.next;
};
*/
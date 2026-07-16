/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if(!list1) return list2;
        if(!list2) return list1;
        let mergedList = null;
        let currentNode = null;
        let smallerNode = null;

        while(list1 || list2){
            if(!list1) {
                currentNode.next = list2;
                break;
            }
            if(!list2) {
                currentNode.next = list1;
                break;
            }

            if(list1.val < list2.val){
                smallerNode = list1;
                list1 = list1.next; 
            } else {
                smallerNode = list2;
                list2 = list2.next;
            }
            if(!currentNode){
                mergedList = smallerNode;
                currentNode = mergedList;
            } else {
                currentNode.next = smallerNode;
                currentNode = currentNode.next;
            }

        } console.log(currentNode,mergedList)
        return mergedList
    }
}

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - `console.log(currentNode,mergedList)` is a leftover debug
 *   statement.
 * - No dummy/sentinel head node is used, so the code needs an extra
 *   `if(!currentNode)` branch inside the loop just to special-case
 *   attaching the very first node, plus two more special-case
 *   branches (`if(!list1)`/`if(!list2)`) duplicating logic that a
 *   dummy-head + `while(list1 && list2)` pattern eliminates entirely.
 *   Net effect: more branches than necessary for what's a simple
 *   merge.
 * - Time O(n + m), space O(1) (nodes are relinked in place, not
 *   copied) — the complexity itself is already optimal.
 *
 * Areas of improvement:
 * - Use a dummy head node and a single `while (list1 && list2)` loop
 *   followed by `tail.next = list1 || list2` to remove the manual
 *   first-node and null-list special cases.
 * - Remove the console.log.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    mergeTwoLists(list1, list2) {
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
    }
}
*/

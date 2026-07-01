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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let index = 0;
        let cur = head;
        while(cur){
            cur = cur.next;
            index++;
        }
        cur = head;
        // If we need to remove the head node
        if (n === index) {
            return head.next;
        }
        index -= n;

        let curIndex = 0;
        while(curIndex < index - 1){
            cur = cur.next;
            curIndex++;
        }
        cur.next = cur?.next?.next || null;
        return head
    }
}

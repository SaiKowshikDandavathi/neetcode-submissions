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
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head;
        let fast = head?.next?.next || null;

        while(slow && fast) {
            if(slow === fast) return true
            slow = slow?.next || null;
            fast = fast?.next?.next || null;
        }
        return false;
    }
}

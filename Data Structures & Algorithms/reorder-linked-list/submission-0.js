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
     * @return {void}
     */
    reorderList(head) {
        let reverse = true;
        let cur = head;
        let map = new Map();
        let index = 1;

        while(cur){
            map.set(index,cur.val);
            index++;
            cur = cur.next;
        }

        cur = head;
        let left = 2;
        let right = index - 1;
        console.log(cur, left,right)

        while(left <= right){
            if(reverse){
                cur.next = new ListNode(map.get(right));
                right--;
            } else {
                cur.next = new ListNode(map.get(left));
                left++;
            }
            reverse = !reverse;
            cur = cur.next;
        }
        return head;
    }
}

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

/**
    
    1. Change cur.next = temp
    2. Assign cur.next = prev
    3. Assign cur = prev 
    
 */
var reverseList = function (head) {
    let cur = head;
    let prev = null;

    while (cur) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }

    return prev;

};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    let slowPointer = head?.next || null;
    let fastPointer = head?.next?.next || null;

    console.log(head, slowPointer, fastPointer)

    while (slowPointer && fastPointer){
        if(slowPointer === fastPointer) return true;
        slowPointer = slowPointer?.next || null;
        fastPointer = fastPointer?.next?.next || null;
    }

    return false
    
};
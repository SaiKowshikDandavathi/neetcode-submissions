/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let len = 0
    let sum = 0
    let cur = head
    
    while (cur) {
        cur = cur.next
        len++
    }
    while (head) {
        sum += (head.val * Math.pow(2, --len))
        head = head.next
    }
    return sum
}
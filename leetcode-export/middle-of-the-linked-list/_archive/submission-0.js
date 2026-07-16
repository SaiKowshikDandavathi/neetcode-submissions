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
var middleNode = function (head) {
    let cur = head
    let len = 0
    const hmap = new Map()
    while (cur) {
        hmap.set(++len, cur)
        cur = cur.next
    }
    const midpoint = len % 2 === 0 ? (len / 2) + 1 : Math.ceil(len / 2)
    return hmap.get(midpoint)
};
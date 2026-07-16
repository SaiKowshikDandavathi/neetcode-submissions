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
    let resArr = []

    while (head) {
        resArr.push(head.val)
        head = head.next
    }
    let value = 0
    let index = 0

    for (let i = resArr.length - 1; i >= 0; i--) {
        value += resArr[i] * Math.pow(2, index)
        index++
    } return value
};
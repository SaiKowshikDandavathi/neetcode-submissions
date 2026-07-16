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
const frequenciesOfElements = (head) => {
    let map = {}
    while (head !== null) {
        map[head.val] = (map[head.val] || 0) + 1
        head = head.next
    }
    const frequencies = Object.values(map)
    let newHead = null
    let lastNode = null
    frequencies.forEach((freq) => {
        newNode = new ListNode(freq)
        if (newHead === null) {
            newHead = newNode
        } else {
            lastNode.next = newNode
        }
        lastNode = newNode
    })
    return newHead
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {string}
 */
const gameResult = (head) => {
    /**
     * Traverse the head and set pairs using hash map
     * compare e[0] and e[1] in each hash map set, assign points accordingly
     */
    let cur = head
    let arr = []
    while (cur) {
        let curVal = cur.val
        let nextNode = cur.next
        let nextVal = nextNode.val
        arr.push([curVal,nextVal])
        cur = nextNode.next
    }
    let evenWins = 0
    let oddWins = 0
    const resArr = arr.map(e => e[0] > e[1] ? e[0] : e[1])
    for (let i = 0; i < resArr.length; i++) {
        resArr[i] % 2 === 0 ? evenWins++ : oddWins++
    }
    return evenWins > oddWins ? "Even" : evenWins === oddWins ? "Tie" : "Odd"
};
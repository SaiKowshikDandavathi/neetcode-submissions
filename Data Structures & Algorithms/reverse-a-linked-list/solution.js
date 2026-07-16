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
     * @return {ListNode}
     */
    reverseList(head) {

        let prev = null;
        let cur = head;

        while(cur){
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next
        }
        return prev
    }
}

/* ============================================================
 * REVIEW — Rating: 10/10
 *
 * Why this isn't perfect:
 * - Nothing to flag — this is the textbook optimal iterative
 *   reversal: O(n) time, O(1) space, correctly handles an empty list
 *   (`head` is null, loop never runs, returns null) and a
 *   single-node list (loop runs once, returns that node with
 *   `next = null`).
 *
 * Areas of improvement:
 * - None of substance. Purely stylistic: could add a blank-line-free
 *   layout, but that's a non-issue.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    reverseList(head) {
        let prev = null;
        let cur = head;

        while (cur) {
            const next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }

        return prev;
    }
}
*/

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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let index = 0;
        let cur = head;
        while(cur){
            cur = cur.next;
            index++;
        }
        cur = head;
        // If we need to remove the head node
        if (n === index) {
            return head.next;
        }
        index -= n;

        let curIndex = 0;
        while(curIndex < index - 1){
            cur = cur.next;
            curIndex++;
        }
        cur.next = cur?.next?.next || null;
        return head
    }
}

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct and O(n) time overall (two O(n) passes = O(n) asymptotic
 *   class), O(1) space. Handles removing the head correctly via the
 *   explicit `n === index` check.
 * - Uses two full passes (count length, then walk to position) where
 *   the classic optimal solution uses a single pass with two pointers
 *   offset by `n` — same Big-O time, but the two-pointer version is
 *   the more expected "single-pass" answer for this problem and
 *   avoids a second traversal.
 *
 * Areas of improvement:
 * - Rewrite with a dummy head + two pointers advanced `n` apart in a
 *   single pass, which also removes the need for the special-cased
 *   head-removal branch.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    removeNthFromEnd(head, n) {
        const dummy = new ListNode(0, head);
        let fast = dummy;
        let slow = dummy;

        for (let i = 0; i < n; i++) {
            fast = fast.next;
        }

        while (fast.next) {
            fast = fast.next;
            slow = slow.next;
        }

        slow.next = slow.next.next;
        return dummy.next;
    }
}
*/

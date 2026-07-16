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

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - Uses a `Map` to store every node's value indexed by position,
 *   which is O(n) extra space. The optimal in-place solution (find
 *   middle with slow/fast pointers, reverse the second half, then
 *   merge the two halves by relinking existing nodes) uses only O(1)
 *   extra space.
 * - Allocates brand-new `ListNode` objects (`new ListNode(...)`) for
 *   every position instead of relinking the existing nodes — wasteful
 *   allocation on top of the already-unnecessary Map.
 * - `console.log(cur, left,right)` is a leftover debug statement.
 * - Time is O(n), which is fine, but the space usage is the real
 *   miss here relative to the known-optimal approach.
 *
 * Areas of improvement:
 * - Rewrite using find-middle (slow/fast), reverse-second-half, and
 *   merge-alternating-in-place to hit O(1) extra space.
 * - Stop allocating new nodes — relink existing ones.
 * - Remove the console.log.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    reorderList(head) {
        if (!head || !head.next) return;

        // 1. Find the middle of the list.
        let slow = head;
        let fast = head;
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // 2. Reverse the second half.
        let prev = null;
        let cur = slow.next;
        slow.next = null;
        while (cur) {
            const next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }

        // 3. Merge the two halves alternately.
        let first = head;
        let second = prev;
        while (second) {
            const firstNext = first.next;
            const secondNext = second.next;
            first.next = second;
            second.next = firstNext;
            first = firstNext;
            second = secondNext;
        }
    }
}
*/

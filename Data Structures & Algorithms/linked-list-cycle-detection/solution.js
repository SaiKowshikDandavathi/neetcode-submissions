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
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head;
        let fast = head?.next?.next || null;

        while(slow && fast) {
            if(slow === fast) return true
            slow = slow?.next || null;
            fast = fast?.next?.next || null;
        }
        return false;
    }
}

/* ============================================================
 * REVIEW — Rating: 10/10
 *
 * Why this isn't perfect:
 * - Nothing substantive. This is Floyd's cycle detection (tortoise
 *   and hare): O(n) time, O(1) space — the optimal known approach.
 *   The optional chaining (`slow?.next?.next || null`) correctly
 *   handles empty list, single node, and two-node lists without
 *   throwing, and `slow === fast` correctly detects the cycle once
 *   the pointers meet.
 *
 * Areas of improvement:
 * - Very minor: initializing `fast = head?.next?.next` up front
 *   duplicates the advancement logic used inside the loop; could
 *   initialize `fast = head` and let the loop's first iteration
 *   advance both pointers uniformly, though the current version is
 *   equally correct and arguably saves one wasted comparison.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    hasCycle(head) {
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) return true;
        }

        return false;
    }
}
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let reverse = true;
    let cur = head;
    let map = new Map();
    let index = 1;

    while (cur) {
        map.set(index, cur.val);
        index++;
        cur = cur.next;
    }
    cur = head;
    let left = 2;
    let right = index - 1;

    while (left <= right) {
        if (reverse) {
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
};

/* ============================================================
 * REVIEW — Rating: 5/10
 *
 * Why this isn't perfect:
 * - Uses an O(n) `Map` to index every node's value by position, and then
 *   allocates a brand-new `ListNode` for every reordered position instead
 *   of relinking existing nodes. That's O(n) extra space for the map plus
 *   O(n) extra allocations, when the classic solution does this in O(1)
 *   extra space by finding the middle (slow/fast pointers), reversing the
 *   second half in place, and merging the two halves by relinking `.next`
 *   pointers.
 * - The function both mutates `head` in place and `return head`s, but the
 *   problem signature documents `@return {void}` — the return value is
 *   unused by LeetCode's harness, which is a bit inconsistent with the
 *   documented contract.
 *
 * Areas of improvement:
 * - Rewrite using find-middle + reverse-second-half + merge for true O(1)
 *   auxiliary space (excluding the input list itself).
 * - Reuse existing node objects instead of constructing new ones.
 * - Drop the unused `return head` to match the documented `void` contract,
 *   or remove the `@return {void}` doc comment if a return value is kept.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var reorderList = function (head) {
    if (!head || !head.next) return;

    // Find the middle of the list.
    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half in place.
    let prev = null, cur = slow.next;
    slow.next = null;
    while (cur) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    // Merge the two halves.
    let first = head, second = prev;
    while (second) {
        const firstNext = first.next;
        const secondNext = second.next;
        first.next = second;
        second.next = firstNext;
        first = firstNext;
        second = secondNext;
    }
};
*/

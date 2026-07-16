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
    let len = 0
    const hmap = new Map()
    while (head) {
        hmap.set(++len, head)
        head = head.next
    }
    const midpoint = len % 2 === 0 ? (len / 2) + 1 : Math.ceil(len / 2)
    return hmap.get(midpoint)
};

/* ============================================================
 * REVIEW — Rating: 5/10
 *
 * Why this isn't perfect:
 * - Correct output, but uses an O(n) space Map keyed by 1-based index
 *   to record every node just to look one back up — this problem has
 *   a well-known O(1) space solution (slow/fast two pointers) that
 *   needs none of that bookkeeping.
 * - Two full passes are implicit here too: one to populate `hmap`
 *   (walking the whole list) and effectively a second lookup — versus
 *   the two-pointer approach which needs only one pass.
 *
 * Areas of improvement:
 * - Replace the hashmap with the standard slow/fast pointer technique:
 *   advance `slow` by one and `fast` by two; when `fast` reaches the
 *   end, `slow` is at the middle. O(n) time, O(1) space, single pass.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var middleNode = function (head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};
*/
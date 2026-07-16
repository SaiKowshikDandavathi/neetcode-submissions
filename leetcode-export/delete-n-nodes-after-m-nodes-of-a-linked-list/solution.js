/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function (head, m, n) {
    let cur = head

    while (cur) {
        let skipped = 1
        let deleted = 0

        while (cur && skipped < m) {
            cur = cur.next
            skipped++
        }
        while (cur && cur.next && deleted < n) {
            cur.next = cur.next.next
            deleted++

        }
        if (cur) {
            cur = cur.next
        }
    };
    return head
};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Already optimal: single pass, O(n) time, O(1) extra space,
 *   in-place relinking (no node copies). Correctly stops early via
 *   the `cur &&` guards in each inner `while` when the list ends
 *   mid-group.
 * - Trailing semicolon after the closing `}` of the outer `while`
 *   (line 33: `};`) is unnecessary — harmless but a stray artifact.
 * - The blank line inside the `deleted` loop (line 28) is a minor
 *   formatting inconsistency.
 *
 * Areas of improvement:
 * - Drop the stray semicolon after the outer while loop.
 * - Tidy up the extra blank line for consistent spacing.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var deleteNodes = function (head, m, n) {
    let cur = head;

    while (cur) {
        // Keep m nodes: advance to the m-th node in this group.
        for (let skipped = 1; cur && skipped < m; skipped++) {
            cur = cur.next;
        }
        if (!cur) break;

        // Delete the next n nodes by relinking around them.
        let toDelete = cur.next;
        for (let deleted = 0; toDelete && deleted < n; deleted++) {
            toDelete = toDelete.next;
        }
        cur.next = toDelete;

        cur = cur.next;
    }

    return head;
};
*/
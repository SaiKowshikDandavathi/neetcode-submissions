/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;

    let curA = headA, curB = headB

    while (curA != curB) {
        curA = curA == null ? headB : curA.next
        curB = curB == null ? headA : curB.next
    }
    return curA

};

/* ============================================================
 * REVIEW — Rating: 10/10
 *
 * Why this isn't perfect:
 * - Nothing meaningful to flag — this is the textbook optimal
 *   two-pointer solution: O(n + m) time, O(1) space, no auxiliary
 *   set/map needed. The early `!headA || !headB` guard and the
 *   pointer-swap-on-null trick to equalize traversal length are both
 *   correctly implemented.
 *
 * Areas of improvement:
 * - Purely stylistic: `curA != curB` / `curA == null` use loose
 *   equality; since these are always object references or `null`,
 *   `!==`/`===` would be marginally more idiomatic and consistent with
 *   strict-equality style used elsewhere in the repo.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;

    // Two pointers each traverse both lists in turn; by the time they've
    // each covered lenA + lenB nodes, they're aligned and either meet at
    // the intersection or both reach null together. O(n+m) time, O(1) space.
    let curA = headA;
    let curB = headB;

    while (curA !== curB) {
        curA = curA === null ? headB : curA.next;
        curB = curB === null ? headA : curB.next;
    }

    return curA;
};
*/
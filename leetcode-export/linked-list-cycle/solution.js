/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let slowPointer = head?.next;
    let fastPointer = head?.next?.next || null;

    while (slowPointer && fastPointer) {
        if (slowPointer === fastPointer) return true
        slowPointer = slowPointer?.next || null;
        fastPointer = fastPointer?.next?.next || null;
    }
    return false

};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Already the optimal approach: Floyd's tortoise-and-hare cycle
 *   detection, O(n) time, O(1) space, no auxiliary Set/Map needed.
 * - Minor nit: the optional-chaining/`|| null` combo
 *   (`slowPointer?.next || null`) is slightly redundant since
 *   `?.next` already evaluates to `undefined` (falsy) when the chain
 *   breaks, and the `while` condition only cares about truthiness —
 *   the `|| null` doesn't change behavior, just adds visual noise.
 *
 * Areas of improvement:
 * - Simplify `slowPointer?.next || null` to `slowPointer?.next` (or
 *   drop optional chaining entirely and rely on the `while (slowPointer
 *   && fastPointer)` guard, since both are already verified non-null
 *   before the `.next` access).
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var hasCycle = function (head) {
    // Floyd's cycle detection: fast pointer moves 2x speed of slow.
    // If there's a cycle, they must eventually meet. O(n) time, O(1) space.
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }

    return false;
};
*/
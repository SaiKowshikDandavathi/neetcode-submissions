/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {

    let oldToNewNode = new Map();
    let cur = head

    while (cur) {
        oldToNewNode.set(cur, new Node(cur.val))
        cur = cur.next
    }

    cur = head;

    while (cur) {

        oldToNewNode.get(cur).next = oldToNewNode.get(cur.next )|| null
        oldToNewNode.get(cur).random = oldToNewNode.get(cur.random) || null
        cur = cur.next
    }

    console.log(oldToNewNode)

    return oldToNewNode.get(head)

};

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - `console.log(oldToNewNode)` on line 33 is a leftover debug
 *   statement left in the submitted solution — dead code.
 * - Uses a `Map` to associate old nodes with their copies, which
 *   is O(n) time and O(n) *extra* space. The well-known optimal
 *   approach interleaves cloned nodes directly into the original
 *   list (old1 -> new1 -> old2 -> new2 -> ...), achieving the same
 *   O(n) time but only O(1) extra space (not counting the output).
 * - `oldToNewNode.get(cur.next) || null` is slightly redundant:
 *   `Map.get` on a missing key already returns `undefined`, and
 *   `cur.next` being `null` means `oldToNewNode.get(null)` is
 *   `undefined` too, so the `|| null` is doing real work here, but
 *   it's easy to misread as unnecessary defensive coding.
 *
 * Areas of improvement:
 * - Remove the debug console.log.
 * - Consider the O(1)-extra-space interleaving technique if asked
 *   about space optimization in an interview follow-up.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var copyRandomList = function (head) {
    if (!head) return null;

    // Pass 1: interleave cloned nodes with the originals.
    let cur = head;
    while (cur) {
        const clone = new Node(cur.val);
        clone.next = cur.next;
        cur.next = clone;
        cur = clone.next;
    }

    // Pass 2: wire up random pointers using the interleaving.
    cur = head;
    while (cur) {
        if (cur.random) cur.next.random = cur.random.next;
        cur = cur.next.next;
    }

    // Pass 3: unweave the two lists.
    cur = head;
    const newHead = head.next;
    while (cur) {
        const clone = cur.next;
        cur.next = clone.next;
        clone.next = clone.next ? clone.next.next : null;
        cur = cur.next;
    }

    return newHead;
};
*/
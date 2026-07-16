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
const frequenciesOfElements = (head) => {
    let map = {}
    while (head !== null) {
        map[head.val] = (map[head.val] || 0) + 1
        head = head.next
    }
    const frequencies = Object.values(map)
    let newHead = null
    let lastNode = null
    frequencies.forEach((freq) => {
        newNode = new ListNode(freq)
        if (newHead === null) {
            newHead = newNode
        } else {
            lastNode.next = newNode
        }
        lastNode = newNode
    })
    return newHead
}

/* ============================================================
 * REVIEW — Rating: 4/10
 *
 * Why this isn't perfect:
 * - Real bug: `newNode = new ListNode(freq)` is missing a `let`/`const`
 *   declaration, creating an implicit global (or throwing a
 *   ReferenceError under strict mode / ES modules). This is exactly
 *   the kind of thing that trips up a submission in a stricter runtime.
 * - Real bug: `map` is a plain object, and `head.val` are numbers.
 *   Plain JS objects order **integer-like keys numerically ascending**,
 *   not by insertion order — so `Object.values(map)` does NOT preserve
 *   the order values first appeared in the list. For input values like
 *   `[3,3,1,1,2,2]`, insertion order is 3,1,2 but `Object.values`
 *   returns them ordered as 1,2,3, silently producing the wrong
 *   sequence if the expected output is frequency-in-first-appearance
 *   order.
 * - O(n) time and O(n) auxiliary space (the map) are appropriate for
 *   this problem, but the ordering bug above undermines correctness
 *   for a real subset of valid inputs.
 *
 * Areas of improvement:
 * - Declare `newNode` with `const`.
 * - Replace the plain object with a `Map`, which reliably preserves
 *   insertion order regardless of key type, to guarantee frequencies
 *   come out in first-appearance order.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
const frequenciesOfElements = (head) => {
    // Map preserves insertion order regardless of key type, unlike a
    // plain object (which reorders integer-like keys numerically).
    // O(n) time, O(n) space.
    const counts = new Map();
    let node = head;
    while (node !== null) {
        counts.set(node.val, (counts.get(node.val) || 0) + 1);
        node = node.next;
    }

    const dummy = new ListNode(0);
    let tail = dummy;
    for (const freq of counts.values()) {
        tail.next = new ListNode(freq);
        tail = tail.next;
    }

    return dummy.next;
};
*/
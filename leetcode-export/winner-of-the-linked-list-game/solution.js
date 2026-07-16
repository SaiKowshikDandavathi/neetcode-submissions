/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {string}
 */
const gameResult = (head) => {
    /**
     * Traverse the head and set pairs using hash map
     * compare e[0] and e[1] in each hash map set, assign points accordingly
     */
    let cur = head
    let arr = []
    while (cur) {
        let curVal = cur.val
        let nextNode = cur.next
        let nextVal = nextNode.val
        arr.push([curVal,nextVal])
        cur = nextNode.next
    }
    let evenWins = 0
    let oddWins = 0
    const resArr = arr.forEach(e => e[0] > e[1] ? evenWins++ : oddWins++)

    return evenWins > oddWins ? "Even" : evenWins === oddWins ? "Tie" : "Odd"
};

/* ============================================================
 * REVIEW — Rating: 4/10
 *
 * Why this isn't perfect:
 * - Real correctness bug: `e[0] > e[1] ? evenWins++ : oddWins++` on
 *   line 28 awards `oddWins` a point whenever the pair is NOT
 *   strictly greater on the even side — including when `e[0] ===
 *   e[1]` (a tie within the pair). Per the problem, a tied pair
 *   should award neither side a point. E.g. head = [1,1,3,2]: the
 *   first pair (1,1) is a tie and should award nothing, but this
 *   code increments `oddWins`, which can flip "Tie"/"Even" results
 *   to "Odd" incorrectly. This is a genuine wrong-answer bug, not
 *   just a style nit.
 * - `const resArr = arr.forEach(...)` is misleading: `Array.forEach`
 *   always returns `undefined`, so `resArr` is a dead variable that
 *   looks like it holds something meaningful but never does.
 * - The header comment ("Traverse the head and set pairs using hash
 *   map ... compare e[0] and e[1] in each hash map set") describes a
 *   hashmap-based approach, but the code actually just builds a
 *   plain array of pairs — stale/inaccurate comment.
 * - Time/space is O(n)/O(n) (builds an intermediate `arr` of all
 *   pairs); the optimal version needs only O(1) extra space by
 *   scoring while traversing instead of materializing every pair.
 *
 * Areas of improvement:
 * - Fix the tie case: only increment a counter when one side is
 *   strictly greater; do nothing on equality.
 * - Drop the unused `resArr` / stop assigning `forEach`'s return
 *   value to a variable.
 * - Score while traversing instead of building `arr` first, to cut
 *   space from O(n) to O(1).
 * - Update the stale comment to describe what the code does.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
const gameResult = (head) => {
    let evenWins = 0;
    let oddWins = 0;
    let cur = head;

    while (cur) {
        const evenVal = cur.val;
        const oddVal = cur.next.val;

        if (evenVal > oddVal) evenWins++;
        else if (oddVal > evenVal) oddWins++;
        // equal values: no point awarded to either side

        cur = cur.next.next;
    }

    if (evenWins === oddWins) return "Tie";
    return evenWins > oddWins ? "Even" : "Odd";
};
*/
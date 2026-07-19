/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const stack = [];
        let result;

        const _traverse = (node) => {
            if(!node || result) return
            if(node.left) _traverse(node.left)
            stack.push(node.val)
            if(stack.length === k) {
                result = stack[stack.length - 1]
                return
            }
            if(node.right) _traverse(node.right)
        }
        _traverse(root)
        return result
    }
}

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Improvement over the prior winner (archived as `_archive/solution.js`,
 *   which did a full in-order traversal into an array and still had a
 *   leftover `console.log` despite an earlier review claiming it had
 *   been removed): this version short-circuits via `if (!node ||
 *   result) return`, so in the common case it stops recursing once
 *   the k-th value is found instead of always walking all n nodes —
 *   O(h + k) time / O(k) space in the typical case versus the prior
 *   O(n) time / O(n) space always.
 * - Real bug: the early-exit guard checks `result` for truthiness,
 *   not `result !== undefined`. If the k-th smallest value happens to
 *   be `0` (a valid BST value per this problem's constraints),
 *   `result` is falsy even after being correctly set, so the guard
 *   fails to short-circuit and the traversal keeps visiting every
 *   remaining node. It doesn't corrupt the returned value (nothing
 *   overwrites `result` after `stack.length === k` first holds, since
 *   `stack` only grows), but it silently defeats the intended
 *   optimization for that one edge case.
 * - `stack` is never popped — it's really just an accumulator array
 *   for in-order values, not used as a LIFO stack. The name suggests
 *   a different data-flow than what's happening.
 * - `_traverse`'s underscore prefix is unconventional for a closure
 *   already scoped inside `kthSmallest`.
 *
 * Areas of improvement:
 * - Fix the guard to `if (!node || result !== undefined) return`.
 * - Switch to the standard iterative in-order-with-explicit-stack
 *   pattern (see ideal below), which gets O(h) space and a correct,
 *   unambiguous stopping condition (`k === 0`) for free, with no
 *   closures or outer mutable result variable.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class Solution {
    kthSmallest(root, k) {
        const stack = [];
        let cur = root;

        while (cur || stack.length) {
            while (cur) {
                stack.push(cur);
                cur = cur.left;
            }
            cur = stack.pop();
            k--;
            if (k === 0) return cur.val;
            cur = cur.right;
        }

        return -1;
    }
}
*/

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
            if(!node || result !== undefined) return
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
 * - Fixes the real bug from the prior winner (archived as
 *   `_archive/submission-1.js`): the early-exit guard now checks
 *   `result !== undefined` instead of truthiness, so a k-th smallest
 *   value of `0` no longer defeats the short-circuit. Correct in all
 *   cases now.
 * - `stack` is still only ever pushed to, never popped — it's an
 *   accumulator of up to k in-order values, not a real stack. That
 *   makes space O(k) in the worst case, where an iterative traversal
 *   that pushes/pops actual tree nodes along the current path only
 *   needs O(h) space.
 * - `_traverse`'s underscore prefix is unconventional for a plain
 *   closure already scoped inside `kthSmallest` — reads like a
 *   private-member convention that doesn't apply here.
 *
 * Areas of improvement:
 * - Use the standard iterative in-order-with-explicit-stack pattern
 *   (see ideal below): the stack holds ancestor nodes on the current
 *   left spine and is popped as each is visited, giving O(h) space
 *   and a simple `k === 0` stopping condition with no closures or
 *   outer mutable `result`.
 * - Drop the underscore from the helper name, or inline the logic
 *   entirely if switching to the iterative approach.
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

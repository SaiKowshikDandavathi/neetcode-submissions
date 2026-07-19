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
        const data = [];
        function inOrder(cur){
            if(!cur) return
            if(cur.left) inOrder(cur.left);
            data.push(cur.val);
            if(cur.right) inOrder(cur.right);
        }
        inOrder(root);
        console.log(data)
        return data.length + 1 >= k ? data[k-1] : null
    }
}

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - `console.log(data)` is a leftover debug statement (removed
 *   above).
 * - Full in-order traversal always visits all n nodes and collects
 *   all n values into `data`, giving O(n) time and O(n) space even
 *   when k is small (e.g. k=1 on a 10,000-node tree still walks the
 *   whole tree). The optimal approach stops as soon as the k-th
 *   value is found, giving O(h + k) time and O(h) space.
 * - `data.length + 1 >= k` is an odd way to write `k <= data.length`
 *   (off-by-one-looking, even though it's not actually wrong since
 *   k is guaranteed valid by the problem's constraints).
 *
 * Areas of improvement:
 * - Use an iterative in-order traversal with an explicit stack that
 *   returns as soon as the k-th node is popped, avoiding the
 *   unnecessary full-tree walk and extra array.
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

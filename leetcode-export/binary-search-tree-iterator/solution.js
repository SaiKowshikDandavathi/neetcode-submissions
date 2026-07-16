class BSTIterator {
    constructor(root) {
        this.root = root;
        this.stack = [];
    }
    
    next() {
        while(this.root) {
            this.stack.push(this.root);
            this.root = this.root.left;
        }
        const res = this.stack.pop();
        this.root = res.right;
        return res.val;
    }
    
    hasNext() {
        return this.root || this.stack.length;
    }
}
/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - This is the optimal controlled in-order traversal: O(h) space (h =
 *   tree height) instead of eagerly flattening the whole tree into an
 *   array up front (O(n) space, as an earlier submission in this problem
 *   did). `next()` is O(1) amortized across all calls, `hasNext()` is O(1).
 * - No JSDoc `@param`/`@return` annotations, unlike the sibling
 *   submissions and most other files in this repo — a small consistency
 *   gap for an interview-ready file.
 *
 * Areas of improvement:
 * - Add the standard JSDoc constructor/method comments to match repo
 *   convention (`@param {TreeNode} root`, `@return {number}`, etc.).
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class BSTIterator {
    constructor(root) {
        this.stack = [];
        this._pushLeft(root);
    }

    _pushLeft(node) {
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
    }

    next() {
        const node = this.stack.pop();
        this._pushLeft(node.right);
        return node.val;
    }

    hasNext() {
        return this.stack.length > 0;
    }
}
*/

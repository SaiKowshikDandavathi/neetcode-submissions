/**
 * // Definition for a _Node.
 * function _Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
// function _Node(val, left, right) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
// };

var treeToDoublyList = function (root) {
    if(!root) return
    let head, previous
    function traverse(cur) {
        if (cur.left) {
            traverse(cur.left)
        }
        if (!head) {
            head = cur
        }
        if (previous) {
            previous.right = cur
            cur.left = previous
        }
        previous = cur
        if (cur.right) {
            traverse(cur.right)
        }
    }
    traverse(root)
    previous.right = head
    head.left = previous

    return head
};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Lines 14-18 are a dead, commented-out duplicate of the `_Node`
 *   definition already given in the JSDoc block above — leftover
 *   scratch code that should have been deleted.
 * - Correct in-order threading approach: O(n) time (visits every
 *   node once), O(h) recursion stack space where h is tree height
 *   (O(n) worst case for a degenerate/unbalanced tree, O(log n)
 *   for a balanced one) — this is the standard optimal approach
 *   for this problem (an O(1)-extra-space Morris traversal exists
 *   but isn't expected here).
 * - Handles single-node trees correctly (head === previous === the
 *   one node, self-links into a circular list of size 1).
 *
 * Areas of improvement:
 * - Delete the dead commented-out `_Node` redefinition.
 * - `head`/`previous` are declared without initializers relying on
 *   implicit `undefined` — an explicit `let head = null, previous = null`
 *   would be clearer about intent.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var treeToDoublyList = function (root) {
    if (!root) return null;

    let head = null;
    let previous = null;

    function inorder(node) {
        if (!node) return;

        inorder(node.left);

        if (previous) {
            previous.right = node;
            node.left = previous;
        } else {
            head = node;
        }
        previous = node;

        inorder(node.right);
    }

    inorder(root);

    // Close the circle.
    previous.right = head;
    head.left = previous;

    return head;
};
*/
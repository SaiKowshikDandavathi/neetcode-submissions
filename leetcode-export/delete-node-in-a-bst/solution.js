/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

function successor(root) {
    root = root.right;
    while (root.left) {
        root = root.left
    }
    return root.val;
}

function predecessor(root) {
    root = root.left;
    while (root.right) {
        root = root.right;
    }
    return root.val
}

var deleteNode = function (root, key) {

    if (!root) return null
    if (key < root.val) {
        root.left = deleteNode(root.left, key)
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key)
    } else {
        // root is a leaf
        if (!root.right && !root.left) {
            root = null
        } else if (root.right) {
            root.val = successor(root);
            root.right = deleteNode(root.right, root.val)
        } else {
            root.val = predecessor(root);
            root.left = deleteNode(root.left, root.val)
        }
    }
    return root


};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - The comment `// root is a leaf` on line 39 is misleading: that
 *   branch is reached whenever `root` is the node *to delete*, not
 *   only when it's a leaf — a leaf is just the special case where
 *   both children are null. This mislabeling could confuse a
 *   reviewer tracing through the logic.
 * - Two trailing blank lines before the closing `};` (lines 51-52)
 *   are stray formatting noise.
 * - Algorithm itself is correct and optimal: O(h) time (h = tree
 *   height), O(h) recursion stack space, using the standard
 *   successor/predecessor-swap technique for the two-children case.
 *
 * Areas of improvement:
 * - Fix the comment to say "root is the node to delete" and
 *   optionally add a nested comment for the true leaf sub-case.
 * - Remove the extra blank lines.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
function successor(node) {
    node = node.right;
    while (node.left) node = node.left;
    return node.val;
}

function predecessor(node) {
    node = node.left;
    while (node.right) node = node.right;
    return node.val;
}

var deleteNode = function (root, key) {
    if (!root) return null;

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // root is the node to delete
        if (!root.left && !root.right) {
            root = null;
        } else if (root.right) {
            root.val = successor(root);
            root.right = deleteNode(root.right, root.val);
        } else {
            root.val = predecessor(root);
            root.left = deleteNode(root.left, root.val);
        }
    }

    return root;
};
*/
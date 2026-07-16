/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function (p, q) {

    if (!p || !q) return null

    let pDepth = getDepth(p);
    let qDepth = getDepth(q);

    while (pDepth != qDepth) {
        if (pDepth > qDepth) {
            p = p.parent;
            pDepth--;
        } else {
            q = q.parent;
            qDepth--;
        }
    }

    while (p != q) {
        p = p.parent;
        q = q.parent;
    }

    return p;
};

function getDepth(node) {
    let depth = 0;
    while (node) {
        node = node.parent;
        depth++
    }
    return depth;
}

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Already the optimal approach for LCA-with-parent-pointers:
 *   compute both depths (O(h) each), align the deeper node up to the
 *   shallower node's level, then walk both up together until they
 *   meet. O(h) time, O(1) extra space — no set/map needed, unlike a
 *   "collect all ancestors of p into a Set" approach which would use
 *   O(h) space.
 * - Minor nit: uses `!=` in the two `while` loop conditions
 *   (`pDepth != qDepth`, `p != q`) instead of `!==`; harmless here
 *   since both sides are always the same type, but inconsistent with
 *   strict-equality style.
 * - The `if (!p || !q) return null` guard is defensive code for a
 *   case the problem doesn't actually allow (both nodes are always
 *   valid tree nodes) — harmless, but worth knowing it's not exercised.
 *
 * Areas of improvement:
 * - Switch `!=` to `!==` for consistency with strict-equality
 *   conventions used elsewhere.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var lowestCommonAncestor = function (p, q) {
    // Align both nodes to the same depth, then walk both up in lockstep
    // until they meet. O(h) time, O(1) space — no extra data structure.
    function getDepth(node) {
        let depth = 0;
        while (node.parent) {
            node = node.parent;
            depth++;
        }
        return depth;
    }

    let depthP = getDepth(p);
    let depthQ = getDepth(q);

    while (depthP > depthQ) {
        p = p.parent;
        depthP--;
    }
    while (depthQ > depthP) {
        q = q.parent;
        depthQ--;
    }

    while (p !== q) {
        p = p.parent;
        q = q.parent;
    }

    return p;
};
*/
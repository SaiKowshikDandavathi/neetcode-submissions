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

    if (p != q) {
        while(pDepth != 0 && qDepth != 0 && p !=q){
            p = p.parent;
            q = q.parent;
            pDepth--;
            qDepth--;
        }
    }

    return p;


};

function getDepth(node) {
    let depth = 0;
    while (node.parent) {
        node = node.parent;
        depth++
    }
    return depth;
}
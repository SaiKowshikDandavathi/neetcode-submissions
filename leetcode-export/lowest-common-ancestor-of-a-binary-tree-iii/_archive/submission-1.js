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

    function getDepth(node) {
        let depth = 0;

        while (node) {
            depth++;
            node = node.parent
        }
        return depth;

    }

    let depthP = getDepth(p);
    let depthQ = getDepth(q);

    while (depthP != depthQ) {
        if( depthP > depthQ){
            p = p.parent;
            depthP--;
        } else {
            q = q.parent;
            depthQ--;
        }
    }

    while(p != q){
        p = p.parent;
        q = q.parent;
    }

    return p;
};
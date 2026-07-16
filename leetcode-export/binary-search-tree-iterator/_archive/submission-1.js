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
 */
var BSTIterator = function(root) {

    this.data = [];
    let arr = []
    function dfs(cur){
        if(!cur) return
        if(cur.left){
            dfs(cur.left)
        }
        arr.push(cur.val)
        if(cur.right){
            dfs(cur.right)
        }
    }
    dfs(root)
    this.data = arr;
    // console.log("data", this.data)
    return null
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    // console.log(this.data)
    let removedElement = this.data.shift()
    return removedElement
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.data.length ? true : false
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
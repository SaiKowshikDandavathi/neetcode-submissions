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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {

    let data = []

    function dfs(cur){
        if(!cur) return
        if(cur.left){
            dfs(cur.left);
        }
        data.push([cur.val, Math.abs(target - cur.val)]);
        if(cur.right){
            dfs(cur.right);
        }
    }
    dfs(root)
    // console.log(data);

    data.sort((a,b) => a[1] - b [1]);
    // console.log("After Sort", data)

    return data[0][0]
    
};
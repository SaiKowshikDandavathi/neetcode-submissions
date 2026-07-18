/**
 * Binary Search Tree with insert, search, delete, and preorder/inorder/postorder/levelOrder traversals
 */

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        const node = new Node(val);
        if (!this.root) {
            this.root = node;
            return this;
        }
        let curNode = this.root;
        while (true) {
            if (val === curNode.val) return undefined;
            if (val < curNode.val) {
                if (!curNode.left) {
                    curNode.left = node;
                    return this;
                }
                curNode = curNode.left;
            } else {
                if (!curNode.right) {
                    curNode.right = node;
                    return this;
                }
                curNode = curNode.right;
            }
        }
    }

    search(val) {
        let curNode = this.root;
        while (curNode) {
            if (val === curNode.val) return curNode;
            curNode = val < curNode.val ? curNode.left : curNode.right;
        }
        return null;
    }

    _min(node) {
        while (node.left) node = node.left;
        return node;
    }

    delete(val) {
        this.root = this._deleteNode(this.root, val);
        return this;
    }

    _deleteNode(node, val) {
        if (!node) return null;
        if (val < node.val) {
            node.left = this._deleteNode(node.left, val);
        } else if (val > node.val) {
            node.right = this._deleteNode(node.right, val);
        } else {
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            const successor = this._min(node.right);
            node.val = successor.val;
            node.right = this._deleteNode(node.right, successor.val);
        }
        return node;
    }

    preorder() {
        const results = [];
        const _traverse = (node) => {
            if (!node) return;
            results.push(node.val);
            _traverse(node.left);
            _traverse(node.right);
        };
        _traverse(this.root);
        return results;
    }

    inorder() {
        const results = [];
        const _traverse = (node) => {
            if (!node) return;
            _traverse(node.left);
            results.push(node.val);
            _traverse(node.right);
        };
        _traverse(this.root);
        return results;
    }

    postorder() {
        const results = [];
        const _traverse = (node) => {
            if (!node) return;
            _traverse(node.left);
            _traverse(node.right);
            results.push(node.val);
        };
        _traverse(this.root);
        return results;
    }

    levelOrder() {
        const results = [];
        if (!this.root) return results;
        const queue = [this.root];
        while (queue.length) {
            const level = [];
            let size = queue.length;
            while (size--) {
                const node = queue.shift();
                level.push(node.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            results.push(level);
        }
        return results;
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12);
bst.insert(20);

console.log(bst.preorder());
console.log(bst.inorder());
console.log(bst.postorder());
console.log(bst.levelOrder());

console.log(bst.search(7));
console.log(bst.search(99));

bst.delete(5);
console.log(bst.inorder());

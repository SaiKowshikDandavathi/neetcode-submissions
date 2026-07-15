class Node {
    constructor(key, value, color = 'red', parent = null, left = null, right = null) {
        this.key = key;
        this.value = value;
        this.color = color; // 'red' or 'black'
        this.parent = parent;
        this.left = left;
        this.right = right;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    insert(key, value) {
        const newNode = new Node(key, value);
        this.root = this._insertNode(this.root, newNode);
        this._fixInsert(newNode);
    }

    _insertNode(root, newNode) {
        if (!root) {
            return newNode;
        }

        if (newNode.key < root.key) {
            root.left = this._insertNode(root.left, newNode);
            root.left.parent = root;
        } else if (newNode.key > root.key) {
            root.right = this._insertNode(root.right, newNode);
            root.right.parent = root;
        }

        return root;
    }

    _fixInsert(node) {
        while (node.parent && node.parent.color === 'red') {
            const parent = node.parent;
            const grandparent = parent.parent;

            if (parent === grandparent.left) {
                const uncle = grandparent.right;
                if (uncle && uncle.color === 'red') {
                    parent.color = 'black';
                    uncle.color = 'black';
                    grandparent.color = 'red';
                    node = grandparent;
                } else {
                    if (node === parent.right) {
                        this._leftRotate(parent);
                        node = parent;
                    }
                    parent.color = 'black';
                    grandparent.color = 'red';
                    this._rightRotate(grandparent);
                }
            } else {
                const uncle = grandparent.left;
                if (uncle && uncle.color === 'red') {
                    parent.color = 'black';
                    uncle.color = 'black';
                    grandparent.color = 'red';
                    node = grandparent;
                } else {
                    if (node === parent.left) {
                        this._rightRotate(parent);
                        node = parent;
                    }
                    parent.color = 'black';
                    grandparent.color = 'red';
                    this._leftRotate(grandparent);
                }
            }
        }
        this.root.color = 'black';
    }

    _leftRotate(node) {
        const rightChild = node.right;
        node.right = rightChild.left;
        if (rightChild.left) {
            rightChild.left.parent = node;
        }
        rightChild.parent = node.parent;
        if (!node.parent) {
            this.root = rightChild;
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }
        rightChild.left = node;
        node.parent = rightChild;
    }

    _rightRotate(node) {
        const leftChild = node.left;
        node.left = leftChild.right;
        if (leftChild.right) {
            leftChild.right.parent = node;
        }
        leftChild.parent = node.parent;
        if (!node.parent) {
            this.root = leftChild;
        } else if (node === node.parent.left) {
            node.parent.left = leftChild;
        } else {
            node.parent.right = leftChild;
        }
        leftChild.right = node;
        node.parent = leftChild;
    }

    find(key) {
      let current = this.root;
      while (current) {
        if (key === current.key) {
          return current.value;
        } else if (key < current.key) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return null;
    }

    // Additional methods (deletion, traversal, etc.) can be added here
}


const tree = new RedBlackTree();
tree.insert(10, 'Value 10');
tree.insert(20, 'Value 20');
tree.insert(5, 'Value 5');
tree.insert(15, 'Value 15');
tree.insert(25, 'Value 25');

console.log(tree)

console.log(tree.find(15)); // Output: Value 15
console.log(tree.find(30)); // Output: null
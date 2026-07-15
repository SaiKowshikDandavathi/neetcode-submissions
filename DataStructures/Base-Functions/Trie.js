class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode();
      }
      currentNode = currentNode.children[char];
    }
    currentNode.endOfWord = true;
  }

  search(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }
    return currentNode.endOfWord;
  }

  delete(word) {
    const _deleteRecurssively = (node, word, index) => {
        // console.log(node,word,index)
      if (index === word.length) {
        if (!node.endOfWord) {
          return false;
        }
        node.endOfWord = false;
        // console.log(Object.keys(node.children))
        return Object.keys(node.children).length === 0;
      }
      const char = word[index];
      const childNode = node.children[char];
      if (!childNode) {
        return false;
      }
      const deleteChildNode = _deleteRecurssively(childNode, word, index + 1);

      if (deleteChildNode) {
        delete node.children[char];
        return !node.endOfWord && Object.keys(node.children).length === 0;
      }
      return false;
    };
    return _deleteRecurssively(this.root, word, 0);
  }
}

const t = new Trie();
t.insert("bat");
t.insert("bats");
t.insert("batsman");
console.log(JSON.stringify(t, 0, 2));
console.log(t.search("bat"));
console.log(t.search("batsa"));
console.log(t.delete("bats"));
console.log(JSON.stringify(t, 0, 2));
console.log(t.search("bats"));


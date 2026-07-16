var TrieNode = function () {
    this.children = {};
    this.isEndOfWord = false;
}

var WordDictionary = function () {
    this.root = new TrieNode();

};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let currentNode = this.root;
    for (let char of word) {
        if (!currentNode.children[char]) {
            currentNode.children[char] = new TrieNode();
        }
        currentNode = currentNode.children[char];
    }
    currentNode.isEndOfWord = true;

};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {

    function dfs(node, i) {
        if (i === word.length) return node.isEndOfWord;
        let char = word[i];
        if (char === ".") {
            for (const child of Object.values(node.children)) {
                if (dfs(child, i + 1)) return true
            }
            return false;
        } else {
            if (!node.children[char]) return false;
            return dfs(node.children[char], i + 1)
        }
    }
    return dfs(this.root, 0)


};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - Clean, correct Trie implementation. `addWord` is O(L) time/
 *   space per word (L = word length). `search` is O(L) for words
 *   with no dots, and up to O(26^d) for d dots in the worst case
 *   (branching at every wildcard) — this is the standard, expected
 *   complexity for this problem; no better general approach exists
 *   for wildcard search.
 * - Minor: `WordDictionary` constructor has a stray blank line
 *   (line 8) before the closing brace, and `dfs`'s `else` branch
 *   after an early `return` inside the `if` (lines 41-43) is
 *   redundant — the `if` block already returns.
 *
 * Areas of improvement:
 * - Drop the unnecessary `else` after the `if (char === ".")`
 *   block's implicit return path for slightly flatter control flow.
 * - Remove the stray blank line in the constructor.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var TrieNode = function () {
    this.children = {};
    this.isEndOfWord = false;
};

var WordDictionary = function () {
    this.root = new TrieNode();
};

WordDictionary.prototype.addWord = function (word) {
    let node = this.root;
    for (const char of word) {
        if (!node.children[char]) node.children[char] = new TrieNode();
        node = node.children[char];
    }
    node.isEndOfWord = true;
};

WordDictionary.prototype.search = function (word) {
    function dfs(node, i) {
        if (!node) return false;
        if (i === word.length) return node.isEndOfWord;

        const char = word[i];
        if (char !== ".") return dfs(node.children[char], i + 1);

        for (const child of Object.values(node.children)) {
            if (dfs(child, i + 1)) return true;
        }
        return false;
    }

    return dfs(this.root, 0);
};
*/
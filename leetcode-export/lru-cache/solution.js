/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.cache = new Map();
    this.maxLength = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        let temp = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, temp)
        return temp
    }
    return -1

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if(this.cache.has(key)){
        this.cache.delete(key)
    }
    if(this.cache.size >= this.maxLength){
        this.cache.delete(this.cache.keys().next().value)  
    }
    this.cache.set(key,value)

};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Leans on the fact that a JS `Map` preserves insertion order and
 *   re-inserting a key moves it to the end, to simulate LRU ordering.
 *   This gives correct O(1) amortized `get`/`put`, but it's relying on
 *   a specific engine guarantee about `Map` iteration order rather
 *   than an explicit data structure (the textbook answer is a
 *   doubly-linked list + hash map, which gives O(1) *worst-case* via
 *   pointer manipulation and doesn't depend on `Map` internals).
 * - `get` does `this.cache.delete(key)` then `this.cache.set(key,
 *   temp)` just to move the key to the end — functionally fine, but
 *   two map operations per `get` where a hand-rolled linked list would
 *   do a couple of pointer reassignments.
 *
 * Areas of improvement:
 * - For a true O(1) worst-case, interview-standard answer, implement
 *   with a doubly-linked list (most-recently-used at the tail) plus a
 *   hash map from key to list node.
 * - Otherwise, this Map-based version is a perfectly reasonable and
 *   commonly accepted solution in practice.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class DLLNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = new Map(); // key -> DLLNode
    this.head = new DLLNode(null, null); // most-recently-used side
    this.tail = new DLLNode(null, null); // least-recently-used side
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype._remove = function (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};

LRUCache.prototype._insertAtHead = function (node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
};

LRUCache.prototype.get = function (key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this._remove(node);
    this._insertAtHead(node);
    return node.value;
};

LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        this._remove(this.map.get(key));
    }
    const node = new DLLNode(key, value);
    this.map.set(key, node);
    this._insertAtHead(node);

    if (this.map.size > this.capacity) {
        const lru = this.tail.prev;
        this._remove(lru);
        this.map.delete(lru.key);
    }
};
*/
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.values = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.values.has(key)) return -1
    const temp = this.values.get(key)
    this.values.delete(key)
    this.values.set(key, temp)
    return temp
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.values.has(key)) {
        this.values.delete(key)
    }
    this.values.set(key, value)
    if (this.values.size > this.capacity) {
        this.values.delete(this.values.keys().next().value)
        // console.log("keys:", this.values.keys())
        // console.log("next:", this.values.keys().next())

    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
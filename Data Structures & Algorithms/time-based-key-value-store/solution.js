class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let data = this.keyStore.get(key) || [];
        data.push([timestamp, value])
        this.keyStore.set(key,data);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let data = this.keyStore.get(key) || [];
        let left = 0;
        let right = data.length - 1;
        let result = '';

        while(left <= right){
            let mid = Math.floor((left + right)/2);
            if(data[mid][0] <= timestamp){
                result = data[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } 
        return result;
    }
}

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - `get` uses `let result = ''` while the map stores strings; if no timestamp
 *   qualifies this correctly returns '' per spec, but relying on an implicit
 *   sentinel is a minor style smell vs. explicitly documenting the "no value" case.
 * - No input validation on `set`/`get` (e.g., calling `get` before any `set`
 *   for a key is handled via `|| []`, which is fine, but not obvious at a glance).
 *
 * Areas of improvement:
 * - Could store `data` sorted by construction guarantee (LeetCode guarantees
 *   strictly increasing timestamps per key) and add a short comment noting
 *   why binary search is safe without an explicit sort call.
 * - Minor: `keyStore` could be renamed `store` for brevity.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class TimeMap {
    constructor() {
        this.store = new Map(); // key -> [[timestamp, value], ...] sorted by timestamp
    }

    set(key, value, timestamp) {
        if (!this.store.has(key)) this.store.set(key, []);
        this.store.get(key).push([timestamp, value]);
    }

    get(key, timestamp) {
        const entries = this.store.get(key);
        if (!entries) return '';

        let left = 0, right = entries.length - 1, result = '';
        while (left <= right) {
            const mid = (left + right) >> 1;
            if (entries[mid][0] <= timestamp) {
                result = entries[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }
}
*/

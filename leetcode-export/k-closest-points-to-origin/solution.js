/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    if (points.length === 0 || k === 0 || !k) return []

    const map = new Map();
    for (const point of points) {
        map.set(point, calcDistance(point))
    }
    const heap = new MaxHeap();
    const mapValues = [...map];

    for (let i = 0; i < k; i++) {
        const [point, dist] = mapValues[i];
        heap.push(point, Number(dist))
    }

    for (let j = k; j < points.length; j++) {
        const [point, dist] = mapValues[j];
        if (heap.peek() > Number(dist)) {
            heap.pop();
            heap.push(point, Number(dist))
        }
    }

    return heap.values.map(e => e.point);

};

function calcDistance(a, b = [0, 0]) {
    return Math.sqrt(Math.pow(Math.abs(a[0] - b[0]), 2) + Math.pow(Math.abs(a[1] - b[1]), 2))
}

class MaxHeap {
    constructor() {
        this.values = []
    }
    swap(arr, ele1, ele2) {
        return [arr[ele1], arr[ele2]] = [arr[ele2], arr[ele1]]
    }
    push(point, dist) {
        this.values.push({ point, dist });
        this.bubbleUp()
    }
    bubbleUp() {
        let bubbleIndex = this.values.length - 1;
        while (bubbleIndex > 0) {
            let parentIndex = Math.floor((bubbleIndex - 1) / 2);
            let bubbleIndexDistance = this.values[bubbleIndex].dist;
            let parentIndexDistance = this.values[parentIndex].dist;
            if (parentIndexDistance > bubbleIndexDistance) break;
            this.swap(this.values, parentIndex, bubbleIndex);
            bubbleIndex = parentIndex;
        }
    }
    pop() {
        this.swap(this.values, 0, this.values.length - 1);
        const removedElement = this.values.pop();
        this.bubbleDown();
        return removedElement
    }

    bubbleDown() {
        let parentIndex = 0;
        let leftChildIndex = 1;
        while (leftChildIndex < this.values.length) {
            let rightChildIndex = (2 * parentIndex) + 2;
            let bigChildIndex = rightChildIndex < this.values.length
                && this.values[rightChildIndex].dist > this.values[leftChildIndex].dist
                ? rightChildIndex
                : leftChildIndex;
            if (this.values[parentIndex].dist > this.values[bigChildIndex].dist) break
            this.swap(this.values, parentIndex, bigChildIndex);
            parentIndex = bigChildIndex;
            leftChildIndex = (2 * parentIndex) + 1;
        }
    }

    peek() {
        return this.values[0].dist;
    }

}

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Uses a `Map` keyed by point (object reference) to store distances
 *   before ever touching the heap — this is O(n) auxiliary space just
 *   to pair each point with its distance, when a plain array of
 *   `[point, dist]` pairs (or computing distance inline) would do the
 *   same job without relying on object-identity map keys.
 * - `calcDistance` wraps each difference in `Math.abs(...)` before
 *   squaring — squaring already eliminates the sign, so the `Math.abs`
 *   calls are dead work.
 * - The max-heap correctly bounds the heap at size k (O(n log k) time,
 *   O(k) heap space), which is the right algorithmic choice over
 *   sorting all n points (O(n log n)) — this part is solid.
 *
 * Areas of improvement:
 * - Drop the intermediate `Map` and compute `calcDistance(point)`
 *   directly where needed, or build a plain array of `{point, dist}`
 *   once instead of a `Map` + `[...map]` conversion.
 * - Remove the redundant `Math.abs` calls in `calcDistance`.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
class MaxHeap {
    constructor() {
        this.values = [];
    }
    swap(i, j) {
        [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
    }
    push(entry) {
        this.values.push(entry);
        let i = this.values.length - 1;
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (this.values[parent].dist >= this.values[i].dist) break;
            this.swap(parent, i);
            i = parent;
        }
    }
    pop() {
        this.swap(0, this.values.length - 1);
        const removed = this.values.pop();
        let i = 0;
        while (true) {
            const left = 2 * i + 1, right = 2 * i + 2;
            let largest = i;
            if (left < this.values.length && this.values[left].dist > this.values[largest].dist) largest = left;
            if (right < this.values.length && this.values[right].dist > this.values[largest].dist) largest = right;
            if (largest === i) break;
            this.swap(i, largest);
            i = largest;
        }
        return removed;
    }
    peek() {
        return this.values[0].dist;
    }
}

var kClosest = function (points, k) {
    // Bounded max-heap of size k: O(n log k) time, O(k) space —
    // better than sorting all n points (O(n log n)).
    const dist = ([x, y]) => x * x + y * y;
    const heap = new MaxHeap();

    for (const point of points) {
        heap.push({ point, dist: dist(point) });
        if (heap.values.length > k) heap.pop();
    }

    return heap.values.map(e => e.point);
};
*/
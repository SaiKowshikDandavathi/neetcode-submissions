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
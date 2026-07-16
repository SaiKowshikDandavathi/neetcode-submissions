/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = {}

    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        map[cur] = (map[cur] || 0) + 1
    }

    const heap = new Heap();

    const mapArray = Object.entries(map);

    for (let i = 0; i < k; i++) {
        const [key, value] = mapArray[i];
        heap.push(key, value)
    }

    for (let j = k; j < mapArray.length; j++) {
        const [key, value] = mapArray[j];
        if (heap.peek() < value) {
            heap.pop();
            heap.push(key, value)
        }
    }

    return heap.values.map(e => e.val)
};

class Heap {
    constructor() {
        this.values = []
    }
    push(val, frequency) {
        if (!val || !frequency) return
        const valueMap = {
            val: Number(val),
            freq: frequency
        }
        this.values.push(valueMap);
        this.bubbleUp()
        return true
    }
    bubbleUp() {
        let bubbleIndex = this.values.length - 1;

        while (bubbleIndex > 0) {
            let parentIndex = Math.floor((bubbleIndex - 1) / 2);
            let bubbleIndexFreq = this.values[bubbleIndex].freq;
            let parentFreq = this.values[parentIndex].freq;
            if (parentFreq <= bubbleIndexFreq) break;
            this.swap(this.values, bubbleIndex, parentIndex);
            bubbleIndex = parentIndex
        }
    }

    swap(arr, idx1, idx2) {
        return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    pop() {
        if (!this.values.length) return;
        this.swap(this.values, 0, this.values.length - 1)
        const removedValue = this.values.pop();
        this.bubbleDown();
        return removedValue
    }

    bubbleDown() {
        let parentIndex = 0;
        let leftChildIndex = 1;
        while (leftChildIndex < this.values.length) {
            let rightChildIndex = (2 * parentIndex) + 2;
            let smallChildIndex = rightChildIndex < this.values.length
                && this.values[rightChildIndex].freq < this.values[leftChildIndex].freq
                ? rightChildIndex
                : leftChildIndex
            let parentFreq = this.values[parentIndex].freq;
            let smallChildFreq = this.values[smallChildIndex].freq;
            if (parentFreq < smallChildFreq) break;
            this.swap(this.values, parentIndex, smallChildIndex);
            parentIndex = smallChildIndex;
            leftChildIndex = (2 * parentIndex) + 1;
        }

    }

    peek() {
        if (!this.values) return undefined
        return this.values[0].freq;
    }
}
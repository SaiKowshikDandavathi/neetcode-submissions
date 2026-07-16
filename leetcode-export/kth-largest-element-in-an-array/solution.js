/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class minHeap {
    constructor() {
        this.values = []
    }

    peek() {
        return this.values[0];
    }

    addElements(num) {
        this.values.push(num);
        this.bubbleUp()
    }

    bubbleUp() {
        let bubbleIndex = this.values.length - 1;
        while (bubbleIndex > 0) {
            let parentIndex = Math.floor((bubbleIndex - 1) / 2);
            let bubbleElement = this.values[bubbleIndex];
            let parentElement = this.values[parentIndex];
            if (parentElement < bubbleElement) break;
            this.swap(this.values, parentIndex, bubbleIndex);
            bubbleIndex = parentIndex;
        }
    }
    swap(arr, ele1, ele2) {
        return [[arr[ele1], arr[ele2]] = [arr[ele2], arr[ele1]]];
    }

    removeElement() {
        this.swap(this.values, 0, this.values.length - 1);
        this.values.pop();
        this.bubbleDown();
    }

    bubbleDown() {
        let parentIndex = 0;
        let leftChildIndex = 1
        if (this.values.length === 0) return
        while (leftChildIndex < this.values.length) {
            let rightChildIndex = (2 * parentIndex) + 2;
            let leftChild = this.values[leftChildIndex];
            let rightChild = this.values[rightChildIndex];
            let parent = this.values[parentIndex];

            let smallestChildIndex = rightChildIndex < this.values.length && rightChild < leftChild ? rightChildIndex : leftChildIndex;
            let smallestChild = this.values[smallestChildIndex];

            if (parent < smallestChild) break;

            this.swap(this.values, parentIndex, smallestChildIndex);
            parentIndex = smallestChildIndex;
            leftChildIndex = (2 * parentIndex) + 1;
        }
    }

}

var findKthLargest = function (nums, k) {
    if (k > nums.length) return
    let res = new minHeap();

    for (let i = 0; i < k; i++) {
        res.addElements(nums[i])
    }
    // console.log(res.values)

    for (let i = k; i < nums.length; i++) {
        if (nums[i] > res.peek()) {
            res.removeElement();
            res.addElements(nums[i]);
        }
    }
    // console.log(res.values)
    return res.peek();

};

/* ============================================================
 * REVIEW — Rating: 7/10
 *
 * Why this isn't perfect:
 * - Leftover commented-out debug lines (`// console.log(res.values)`)
 *   are dead code that should be removed.
 * - `minHeap` class is named with a lowercase first letter, breaking
 *   from JS convention where classes are `PascalCase` (compare to this
 *   repo's own `MaxHeap` in the k-closest-points-to-origin solution).
 * - Min-heap of size k (O(n log k) time, O(k) space) is the right
 *   algorithmic choice over sorting (O(n log n)) — this part is
 *   correct and well-encapsulated in a class, unlike the free-function
 *   version this repo also has for the same pattern.
 * - Quickselect (O(n) average time) is the asymptotically better
 *   approach for this specific problem (only need the kth value, not a
 *   sorted top-k), though the heap approach is a very reasonable and
 *   commonly accepted alternative.
 *
 * Areas of improvement:
 * - Remove the dead `console.log` comments.
 * - Rename `minHeap` to `MinHeap` for class-naming consistency.
 * - Consider Quickselect as a follow-up optimization to demonstrate
 *   awareness of the O(n) average-case approach.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var findKthLargest = function (nums, k) {
    // Quickselect: partition around a pivot and recurse only into the
    // side that contains the kth largest element. O(n) average time,
    // O(1) extra space (in-place partitioning).
    const targetIndex = nums.length - k;

    function partition(left, right) {
        const pivot = nums[right];
        let boundary = left;
        for (let i = left; i < right; i++) {
            if (nums[i] < pivot) {
                [nums[i], nums[boundary]] = [nums[boundary], nums[i]];
                boundary++;
            }
        }
        [nums[boundary], nums[right]] = [nums[right], nums[boundary]];
        return boundary;
    }

    let left = 0;
    let right = nums.length - 1;
    while (true) {
        const pivotIndex = partition(left, right);
        if (pivotIndex === targetIndex) return nums[pivotIndex];
        if (pivotIndex < targetIndex) left = pivotIndex + 1;
        else right = pivotIndex - 1;
    }
};
*/

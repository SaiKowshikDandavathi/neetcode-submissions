/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    if (k > nums.length) return
    let res = []
    for (let i = 0; i < k; i++) {
        res.push(nums[i]);
        bubbleUp(res);
    }

    for (let i = k; i < nums.length; i++) {
        if (nums[i] > peek(res)) {

            popEle(res);

            res.push(nums[i])

            bubbleUp(res);

        }
    }
    return peek(res);

};

function peek(res) {
    return res[0]
}

function bubbleUp(res) {
    //Smallest Element should be the first element of response array
    let bubbleElement = res[res.length - 1];
    let bubbleElementIndex = res.length - 1;
    while (bubbleElementIndex > 0) {
        let parentIndex = Math.floor((bubbleElementIndex - 1) / 2);
        let parentElement = res[parentIndex]
        if (parentElement < bubbleElement) break;
        swap(res, bubbleElementIndex, parentIndex);
        bubbleElementIndex = parentIndex;
    }

}
function bubbleDown(res) {
    // in the res array, first Elemet should be smallest
    let parentIndex = 0;
    let leftChildIndex = 1;
    if (res.length === 0) return
    while (leftChildIndex < res.length) {
        let rightChildIndex = (parentIndex * 2) + 2;
        let leftChild = res[leftChildIndex];
        let rightChild = res[rightChildIndex];
        let parent = res[parentIndex];
        let smallestChildIndex = rightChildIndex < res.length && rightChild < leftChild
            ? rightChildIndex
            : leftChildIndex;
        let smallestChild = res[smallestChildIndex]
        if (parent < smallestChild) break;
        swap(res, smallestChildIndex, parentIndex);
        parentIndex = smallestChildIndex;
        leftChildIndex = (parentIndex * 2) + 1
    }
}
function popEle(res) {
    swap(res, 0, res.length - 1)
    res.pop()
    bubbleDown(res);
    return;
}
function swap(arr, ele1, ele2) {
    return [[arr[ele1], arr[ele2]] = [arr[ele2], arr[ele1]]]
}


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

    const mergedArray = mergeArrays(nums1, nums2);
    let leftIndex = 0;
    let rightIndex = 0;

    if (mergedArray.length % 2 === 0) {
        leftIndex = Math.floor(mergedArray.length / 2) - 1;
        rightIndex = Math.floor(mergedArray.length / 2);
        return (mergedArray[leftIndex] + mergedArray[rightIndex]) / 2
    } else {
        let index = Math.floor(mergedArray.length / 2)
        return mergedArray[index];
    }

};

function mergeArrays(nums1, nums2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
    let leftOver = [];

    while (i < nums1.length || j < nums2.length) {
        if (i === nums1.length) {
            leftOver = nums2.slice(j);
            mergedArray.push(...leftOver);
            j = nums2.length;
            break;
        }
        if (j === nums2.length) {
            leftOver = nums1.slice(i);
            mergedArray.push(...leftOver);
            i = nums1.length;
            break;
        }

        if (nums1[i] < nums2[j]) {
            mergedArray.push(nums1[i]);
            i++;
        } else {
            mergedArray.push(nums2[j]);
            j++;
        }

    }

    return mergedArray
}
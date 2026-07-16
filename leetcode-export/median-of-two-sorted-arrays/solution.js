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

/* ============================================================
 * REVIEW — Rating: 5/10
 *
 * Why this isn't perfect:
 * - This is LeetCode Hard specifically because it demands
 *   O(log(m+n)) time; this solution fully merges both arrays first
 *   (`mergeArrays`) which is O(m+n) time and O(m+n) extra space. It
 *   gets the right answer but skips the entire point of the problem
 *   — the binary-search-on-partition technique interviewers are
 *   testing for.
 * - `leftIndex`/`rightIndex` are declared with `let ... = 0` and
 *   immediately overwritten in the even-length branch — the initial
 *   assignment is dead.
 *
 * Areas of improvement:
 * - Replace the merge with a binary search over the smaller array to
 *   find the correct partition point in O(log(min(m,n))) time,
 *   without allocating any extra array.
 * - Drop the unused initial `= 0` assignments for the index variables.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

    const m = nums1.length, n = nums2.length;
    const half = Math.floor((m + n + 1) / 2);
    let low = 0, high = m;

    while (low <= high) {
        const cut1 = Math.floor((low + high) / 2);
        const cut2 = half - cut1;

        const left1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
        const left2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];
        const right1 = cut1 === m ? Infinity : nums1[cut1];
        const right2 = cut2 === n ? Infinity : nums2[cut2];

        if (left1 <= right2 && left2 <= right1) {
            if ((m + n) % 2 === 0) {
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
            }
            return Math.max(left1, left2);
        } else if (left1 > right2) {
            high = cut1 - 1;
        } else {
            low = cut1 + 1;
        }
    }
};
*/
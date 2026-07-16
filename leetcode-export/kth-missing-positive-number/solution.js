/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */


/**
   - Use the fact that these are sorted arrays
   - Formula for this is arr[idx] - idx = missing elements
 */
var findKthPositive = function (arr, k) {

    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // console.log(left, right, mid)

        if (arr[mid] - mid - 1 < k) {
            left = mid + 1;
        } else {
            right = mid - 1
        }
    }

    return left + k
}

/**
    input = [2,3, 4,7,11] k=5

    Loop 1
        left = 0
        right = 4
        mid = 2
        calc = 4-2-1 = 1 < 5
    Loop 2
        left = 3
        right = 4
        mid = 3
        calc = 7-3-1 = 3
    Loop 3
        left = 4
        right = 4
        mid = 4
        calc = 7-4-1 = 2

 */



/**
   - create a new array with constaint length
   - Loop through input array and map its value to corresponding index
   - Make another loop and reurn the index in res array that has value of -1 in k
 */
// Brute force O(N)
// var findKthPositive = function (arr, k) {
//     const max = arr.length + k + 1
//     const array = new Array(max).fill(-1);
//     let count = 0

//     for (let key in arr) {
//         array[arr[key]] = arr[key]
//     }

//     for (let i = 1; i < array.length; i++) {
//         if (array[i] === -1) {
//             count++
//         }
//         if (count === k) {
//             return i
//         }
//     }

// };

/* ============================================================
 * REVIEW — Rating: 6/10
 *
 * Why this isn't perfect:
 * - The binary search itself (arr[mid] - mid - 1 = count of missing
 *   numbers up to arr[mid]) is the correct, optimal O(log n) time,
 *   O(1) space approach for this problem — that part is solid.
 * - The rest of the file is cluttered with dead code: a leftover
 *   `// console.log(left, right, mid)`, a full manual trace-through of
 *   an example left in as a comment block, and an entire commented-out
 *   O(n) brute-force implementation. None of this belongs in a final
 *   submission — it should either be deleted or moved to notes outside
 *   the solution file.
 *
 * Areas of improvement:
 * - Delete the commented-out debug line, the manual trace-through, and
 *   the commented-out brute-force function — keep only the final
 *   algorithm plus a short comment on the invariant.
 * - If the trace-through / brute-force comparison has ongoing
 *   educational value, move it to a separate notes file rather than
 *   shipping it inside the graded solution.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var findKthPositive = function (arr, k) {
    // arr[mid] - mid - 1 = how many positive numbers are missing by
    // the time we reach arr[mid] (since arr is sorted and strictly
    // increasing). Binary search for the smallest index where that
    // count reaches k. O(log n) time, O(1) space.
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const missingSoFar = arr[mid] - mid - 1;
        if (missingSoFar < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left + k;
};
*/
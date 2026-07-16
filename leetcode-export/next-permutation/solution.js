var nextPermutation = function(nums) {
    
    for(let i = nums.length-1; i >= 0; i--) {
        if(nums[i] < nums[i+1]) {
            const large = nextLarge(i);
            swap(i, large);
            reverse(i+1);
            return;
        }
    }
	
	// If there is no next permutation reverse the arr
    nums.reverse()
    
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    function reverse(idx) {
        let start = idx, end = nums.length-1;
        
        while(start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }
    
    function nextLarge(idx) {
        for(let i = nums.length-1; i > idx; i--) {
            if(nums[i] > nums[idx]) return i;
        }
    }
};

/* ============================================================
 * REVIEW — Rating: 9/10
 *
 * Why this isn't perfect:
 * - This is the textbook-optimal in-place algorithm: find the
 *   rightmost ascent, swap with the next-larger element from the
 *   right, then reverse the suffix — O(n) time, O(1) extra space.
 *   Correctly falls back to a full reverse when the array is the
 *   last permutation (strictly descending).
 * - Missing the `@param`/`@return` JSDoc header that every sibling
 *   file in this repo has.
 * - Indentation mixes a tab (before the `// If there is no next
 *   permutation` comment) with spaces used everywhere else in the
 *   file — a cosmetic inconsistency.
 *
 * Areas of improvement:
 * - Add the standard `/** @param {number[]} nums @return {void} ...`
 *   doc comment for consistency with the rest of the repo.
 * - Normalize indentation to spaces throughout.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var nextPermutation = function (nums) {
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;

    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) j--;
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    let left = i + 1, right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};
*/
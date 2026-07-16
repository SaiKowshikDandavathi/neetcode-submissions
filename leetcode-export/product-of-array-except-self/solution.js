var productExceptSelf = function (nums) {
  let res = new Array(nums.length).fill(1);
  //First pass 0 --> array.length, store product in i+1 array
  let product = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    product = product * nums[i];
    res[i + 1] = product;
  }
  //Second pass is from reverse order and multiply the number to i-1 element in res array
  product = 1;
  for (let j = nums.length - 1; j > 0; j--) {
    product = product * nums[j]
    res[j - 1] = product * res[j - 1];;
  }
  return res;
};

/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Stray double semicolon on `res[j - 1] = product * res[j - 1];;` — a
 *   copy/paste artifact that a linter would flag.
 * - Variable name `product` is reused for both the left-running product and
 *   the right-running product across the two passes, which is fine
 *   functionally but slightly obscures that they track different things.
 *
 * Areas of improvement:
 * - Remove the stray semicolon.
 * - Consider `prefix`/`suffix` naming instead of a single reused `product`
 *   for clarity.
 * - Complexity is already optimal: O(n) time, O(1) extra space (excluding
 *   the output array), no division used.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var productExceptSelf = function (nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= suffix;
        suffix *= nums[i];
    }

    return res;
};
*/
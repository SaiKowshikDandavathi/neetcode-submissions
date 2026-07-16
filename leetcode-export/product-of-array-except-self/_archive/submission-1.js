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
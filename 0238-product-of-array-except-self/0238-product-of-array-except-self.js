/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  const output = [];
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    output[i] = product;
    product *= nums[i];
  }
  
  product = 1;
  for (let i = nums.length -1; i >= 0; i--) {
    output[i] *= product;
    product *= nums[i];
  }
  
  return output;
};
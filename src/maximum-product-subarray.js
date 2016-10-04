/**
 * @param {number[]} nums
 * @return {number}
 */
/*
  fmax(n) = max(
    fmax(n - 1) * nums[n],
    fmin(n - 1) * nums[n],
    nums[n]
  );
  fmin(n) = min(
    fmax(n - 1) * nums[n],
    fmin(n - 1) * nums[n],
    nums[n]
  );
*/
const maxProduct = (nums) => {
  if (!nums.length) {
    return 0;
  }
  const fmax = [...Array(nums)].fill(0);
  const fmin = [...Array(nums)].fill(0);
  fmax[0] = nums[0];
  fmin[0] = nums[0];
  let max = fmax[0];
  for (let n = 1; n < nums.length; n++) {
    fmax[n] = Math.max(
      fmax[n - 1] * nums[n],
      fmin[n - 1] * nums[n],
      nums[n]
    );
    fmin[n] = Math.min(
      fmax[n - 1] * nums[n],
      fmin[n - 1] * nums[n],
      nums[n]
    );
    max = Math.max(max, fmax[n]);
  }
  return max;
};

export default maxProduct;

/**
 * @param {number[]} nums
 * @return {number}
 */
 /*
  f(n) = Math.max(
    f(n - 1) + nums[n],
    nums[n]
  )
 */
const maxSubArray = (nums) => {
  if (!nums.length) {
    return 0;
  }
  const f = [...Array(nums.length)].fill(0);
  f[0] = nums[0];
  let max = f[0];
  for (let i = 1; i < nums.length; i++) {
    f[i] = Math.max(
      f[i - 1] + nums[i],
      nums[i]
    );
    max = Math.max(max, f[i]);
  }
  return max;
};

export default maxSubArray;

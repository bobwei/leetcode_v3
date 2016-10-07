/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
  if (!nums.length) {
    return 0;
  }
  let max = 1;
  const f = [...Array(nums.length)].fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        f[i] = Math.max(f[i], f[j] + 1);
        max = Math.max(max, f[i]);
      }
    }
  }
  return max;
};

export default lengthOfLIS;

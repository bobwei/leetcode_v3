/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  if (!nums.length) {
    return 0;
  }
  const output = [nums[0], Math.max(nums[0], nums[1])];
  const n = nums.length;
  for (let i = 2; i < n; i++) {
    const v = Math.max(nums[i] + output[i - 2], output[i - 1]);
    output.push(v);
  }
  return output[n - 1];
};

console.log(rob([6, 4, 2, 3, 1]));
console.log(rob([50, 1, 1, 50]));

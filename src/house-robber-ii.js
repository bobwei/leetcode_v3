/**
 * @param {number[]} nums
 * @return {number}
 */

const robIJ = (nums, i, j) => {
  if (!nums.length) {
    return 0;
  }
  const start = (i !== undefined) ? i : 0;
  const end = (j !== undefined) ? j : nums.length - 1;
  const n = end - start;
  const output = [nums[start], Math.max(nums[start], nums[start + 1])];
  for (let k = 2; k <= n; k++) {
    const v = Math.max(nums[start + k] + output[k - 2], output[k - 1]);
    output.push(v);
  }
  return output[n];
};

const rob = (nums) => {
  if (!nums.length) {
    return 0;
  }
  const output = [
    nums[0],
    Math.max(nums[0], nums[1]),
    Math.max(nums[0], nums[1], nums[2]),
  ];
  if (nums.length <= 3) {
    return output[nums.length - 1];
  }
  const i = 0;
  const j = nums.length - 1;
  return Math.max(
    nums[j] + robIJ(nums, i + 1, j - 2),
    nums[i] + robIJ(nums, i + 2, j - 1),
    robIJ(nums, i + 1, j - 1)
  );
};

console.log(robIJ([6, 4, 2, 3, 1]));
console.log(robIJ([6, 4, 2, 3, 1], 0, 2));
console.log(robIJ([2, 7, 7, 7, 4], 1, 3));
console.log(rob([6, 4, 2, 3, 1]));
console.log(rob([0, 1, 2]));
console.log(rob([1, 1, 1]));
console.log(rob([0, 1, 2, 3]));
console.log(rob([2, 7, 7, 7, 4]));

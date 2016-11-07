/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
  const n = nums.length;
  let i = 0;
  let j = n - 1;
  while (nums[i] > nums[j]) {
    const k = Math.floor((i + j) / 2);
    if (nums[k] <= nums[i]) {
      j = k;
    } else if (nums[k] >= nums[j]) {
      i = k;
    }
  }
  return nums[(j + 1) % n];
};

export default findMin;

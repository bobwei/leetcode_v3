/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
/* sliding window */
const minSubArrayLen = (s, nums) => {
  let minLength = Infinity;
  const path = new Set();
  let currentSum = 0;
  let lastJ = -Infinity;
  /* starting point */
  for (let i = 0; i < nums.length; i++) {
    /* ending j */
    for (let j = Math.max(i, lastJ); j < nums.length; j++) {
      if (!path.has(j)) {
        path.add(j);
        currentSum += nums[j];
      }
      if (currentSum >= s) {
        minLength = Math.min(minLength, j - i + 1);
        lastJ = j;
        break;
      }
    }
    currentSum -= nums[i];
  }
  if (minLength < Infinity) {
    return minLength;
  }
  return 0;
};

export default minSubArrayLen;

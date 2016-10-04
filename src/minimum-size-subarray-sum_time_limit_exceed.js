/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const sum = (arr, i, j) => {
  let sum = 0;
  for (let k = i; k < j; k++) {
    sum += arr[k];
  }
  return sum;
};

const minSubArrayLen = (s, nums) => {
  /* length */
  for (let i = 1; i < nums.length + 1; i++) {
    /* startI */
    for (let j = 0; j < nums.length; j++) {
      /* startI to length i */
      for (let k = j + i; k < j + i + 1; k++) {
        if (sum(nums, j, k) >= s) {
          return i;
        }
      }
    }
  }
  return 0;
};

export default minSubArrayLen;

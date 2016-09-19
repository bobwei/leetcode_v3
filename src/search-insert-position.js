/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    const m = Math.floor((i + j) / 2);
    if (target === nums[m]) {
      return m;
    } else if (target < nums[m]) {
      j = m - 1;
    } else if (target > nums[m]) {
      i = m + 1;
    }
  }
  return j + 1;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1, 3, 5, 6], 100));
console.log(searchInsert([], 0));

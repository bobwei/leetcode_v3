/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  const range = [];
  let i;
  let j;
  let start = -1;
  let end = -1;
  /*
    find lower bound
   */
  i = 0;
  j = nums.length - 1;
  while (i <= j) {
    const m = Math.floor((i + j) / 2);
    if (target > nums[m]) {
      i = m + 1;
    } else if (target < nums[m]) {
      j = m - 1;
    } else {
      j = m - 1;
    }
  }
  if (nums[j + 1] === target) {
    start = j + 1;
  }
  range.push(start);
  /*
    find upper bound
   */
  i = 0;
  j = nums.length - 1;
  while (i <= j) {
    const m = Math.floor((i + j) / 2);
    if (target > nums[m]) {
      i = m + 1;
    } else if (target < nums[m]) {
      j = m - 1;
    } else {
      i = m + 1;
    }
  }
  if (nums[i - 1] === target) {
    end = i - 1;
  }
  range.push(end);
  return range;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 7, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 10));
console.log(searchRange([5, 7, 7, 8, 8, 10], 100));
console.log(searchRange([], 100));
console.log(searchRange([1], 0));

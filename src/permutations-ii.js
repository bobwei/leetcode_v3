/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums, output = [], used = {}, path = []) => {
  if (path.length === nums.length) {
    output.push([...path]);
    return output;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!used[i - 1] && nums[i] === nums[i - 1]) {
      continue;
    }
    if (!used[i]) {
      used[i] = true;
      path.push(nums[i]);
      permuteUnique(nums, output, used, path);
      path.pop();
      used[i] = false;
    }
  }
  return output;
};

console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([1, 2, 3]));

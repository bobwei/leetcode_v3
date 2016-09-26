/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums, output = [], pathSet = {}, path = []) => {
  if (path.length === nums.length) {
    output.push([...path]);
    return output;
  }
  const levelSet = {};
  for (let i = 0; i < nums.length; i++) {
    if (!pathSet[i]) {
      pathSet[i] = true;
      if (!levelSet[nums[i]]) {
        levelSet[nums[i]] = true;
        path.push(nums[i]);
        permuteUnique(nums, output, pathSet, path);
        path.pop();
      }
      pathSet[i] = false;
    }
  }
  return output;
};

console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([1, 2, 3]));
console.log(permuteUnique([1, 1, 1, 2, 1]));
console.log(permuteUnique([3, 3, 0, 3]));

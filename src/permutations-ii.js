/* eslint-disable no-param-reassign, max-len */
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
const t1 = new Date();
permuteUnique([3, 3, 0, 3, 3, 3, 0, 3, 3, 3, 0, 3, 3, 3, 0, 3, 3, 3, 0, 3, 3, 3, 0, 3, 3, 3, 0, 3, 3, 3]);
console.log('time elapsed', ((new Date()) - t1) / 1000);

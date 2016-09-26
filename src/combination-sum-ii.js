/* eslint-disable no-param-reassign, max-len, arrow-body-style */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const recursiveSum = (candidates, target, start, path, ouput) => {
  if (target < 0) {
    return;
  }
  if (target === 0) {
    ouput.push([...path]);
  }
  for (let i = start; i < candidates.length; i++) {
    if (i > start && candidates[i] === candidates[i - 1]) {
      continue;
    }
    path.push(candidates[i]);
    recursiveSum(candidates, target - candidates[i], i + 1, path, ouput);
    path.pop();
  }
};

const combinationSum2 = (theCandidates, target) => {
  const candidates = [...theCandidates].sort((a, b) => a - b);
  const output = [];
  recursiveSum(candidates, target, 0, [], output);
  return output;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([1, 1, 2, 3], 4));
const t1 = new Date();
console.log(combinationSum2([23, 29, 8, 24, 5, 7, 25, 29, 18, 18, 32, 29, 30, 5, 9, 23, 27, 15, 28, 32, 11, 24, 11, 29, 12, 32, 5, 7, 31, 16, 7, 19, 10, 33, 8, 10, 5, 21, 26, 18, 26, 23, 5, 21, 24, 31, 31, 8, 11, 16, 5, 17, 5, 33, 34, 12, 31, 26, 7, 27], 22));
console.log('time elapsed', ((new Date()) - t1) / 1000);

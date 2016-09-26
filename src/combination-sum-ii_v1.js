/* eslint-disable no-param-reassign, max-len, arrow-body-style */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const recursiveSum = (candidates, target, memory = {}) => {
  const memoryKey = `${target}:${candidates}`;
  if (memory[memoryKey]) {
    return memory[memoryKey];
  }
  const output = [];
  const cache = {};
  for (let i = 0; i < candidates.length; i++) {
    const candidate = candidates[i];
    const remaining = target - candidate;
    if (remaining === 0) {
      const combination = [candidate];
      const cacheKey = combination.sort().join();
      if (!cache[cacheKey]) {
        cache[cacheKey] = true;
        output.push(combination);
      }
    } else if (remaining > 0) {
      const remainingCandidates = [...candidates];
      remainingCandidates.splice(i, 1);
      const results = recursiveSum(remainingCandidates, remaining, memory, cache);
      results
        .forEach((result) => {
          const combination = [candidate, ...result];
          const cacheKey = combination.sort().join();
          if (!cache[cacheKey]) {
            cache[cacheKey] = true;
            output.push(combination);
          }
        });
    } else {
      break;
    }
  }
  memory[memoryKey] = output;
  return output;
};

const combinationSum2 = (candidates, target) => {
  return recursiveSum(candidates.sort((a, b) => a - b), target);
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([1, 1], 1));
let t1 = new Date();
console.log(combinationSum2([23, 29, 8, 24, 5, 7, 25, 29, 18, 18, 32, 29, 30, 5, 9, 23, 27, 15, 28, 32, 11, 24, 11, 29, 12, 32, 5, 7, 31, 16, 7, 19, 10, 33, 8, 10, 5, 21, 26, 18, 26, 23, 5, 21, 24, 31, 31, 8, 11, 16, 5, 17, 5, 33, 34, 12, 31, 26, 7, 27], 22));
console.log('time elapsed', ((new Date()) - t1) / 1000);
t1 = new Date();
console.log(combinationSum2([32, 10, 32, 5, 25, 9, 18, 23, 28, 24, 10, 33, 6, 24, 32, 18, 10, 28, 17, 18, 13, 22, 7, 25, 22, 17, 28, 13, 17, 32, 19, 6, 7, 17, 7, 28, 21, 12, 8, 6, 31, 13, 34, 24, 24, 31, 8, 29, 16, 20, 12, 25, 29, 6, 15, 16, 19, 30, 17, 23, 27, 31, 17, 29], 28));
console.log('time elapsed', ((new Date()) - t1) / 1000);

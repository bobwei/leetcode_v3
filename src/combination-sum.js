/* eslint-disable no-param-reassign */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/*
  calculate combination sum with DFS and memorization
*/
const combinationSum = (candidates, target, memory = {}) => {
  if (memory[target]) {
    return memory[target];
  }

  /*
    outputCache is used to check duplicate combinations,
    ex:
      2, 2, 3
      2, 3, 2
      3, 2, 2
      these output are considered as duplicates
  */
  const outputCache = {};
  const output = [];

  candidates
    .forEach((candidate) => {
      const remaining = target - candidate;
      if (remaining === 0) {
        output.push([candidate]);
        return;
      } else if (remaining > 0) {
        const results = combinationSum(candidates, remaining, memory);
        results.forEach((result) => {
          const combination = [candidate, ...result].sort();

          /*
            check duplications
          */
          const cacheKey = combination.join('');
          if (!outputCache[cacheKey]) {
            output.push(combination);
            outputCache[cacheKey] = true;
          }
        });
        return;
      }
    });
  memory[target] = output;
  return output;
};

console.log(combinationSum([2, 3, 6, 7], 7));
const t1 = new Date();
combinationSum([2, 3, 6, 7], 35);
console.log('time elapsed', ((new Date()) - t1) / 1000);
console.log(combinationSum([2, 3, 6, 7], 1));
console.log(combinationSum([], 10));

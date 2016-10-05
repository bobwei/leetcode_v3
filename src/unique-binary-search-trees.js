/**
 * @param {number} n
 * @return {number}
 */
/*
  Observation :
    for the same length of sorted array, there are the same total number of structurally
    unique BSTs
    ex : [1, 2, 3] has the same total number of structurally unique BSTs with [4, 5, 6]

  f(n) = f(0) * f(n - 1) +
         f(1) * f(n - 1 - 1) +
         f(i) * f(n - 1 - i),
         i from 0 to n - 1
*/
const numTrees = (n) => {
  const f = [...Array(n + 1)].fill(0);
  f[0] = 1;
  f[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      f[i] += f[j] * f[i - 1 - j];
    }
  }
  return f[n];
};

export default numTrees;

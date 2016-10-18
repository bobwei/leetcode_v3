/**
 * @param {number} n
 * @return {number}
 */
const canPlaceHere = (pi, pj, path) => {
  if (path.some(([i]) => pi === i)) {
    return false;
  }
  if (path.some(([, j]) => pj === j)) {
    return false;
  }
  if (path.some(([i, j]) => i - j === pi - pj || i + j === pi + pj)) {
    return false;
  }
  return true;
};

const helper = (n, i = 0, path = [], result = { totalN: 0 }) => {
  if (path.length >= n) {
    result.totalN += 1;
    return result;
  }
  for (let j = 0; j < n; j++) {
    if (canPlaceHere(i, j, path)) {
      path.push([i, j]);
      helper(n, i + 1, path, result);
      path.pop();
    }
  }
  return result;
};

const totalNQueens = (n) => {
  const { totalN } = helper(n);
  return totalN;
};

export default totalNQueens;

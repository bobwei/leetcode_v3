/**
 * @param {number} n
 * @return {string[][]}
 */
const DOT = '.';
const QUEEN = 'Q';

const canPlaceQueen = (path, pi, pj) => {
  /* check vertically */
  if (path.some(([, j]) => j === pj)) {
    return false;
  }
  /* check horizontally */
  if (path.some(([i]) => i === pi)) {
    return false;
  }
  /* check diagonally */
  if (path.some(([i, j]) => i - j === pi - pj || i + j === pi + pj)) {
    return false;
  }
  return true;
};

const helper = (n, startI = 0, path = [], output = []) => {
  if (startI >= n) {
    output.push([...path]);
    return output;
  }
  for (let j = 0; j < n; j++) {
    if (canPlaceQueen(path, startI, j)) {
      path.push([startI, j]);
      helper(n, startI + 1, path, output);
      path.pop();
    }
  }
  return output;
};

const solveNQueens = (n) => {
  if (!n) {
    return [];
  }
  const queens = helper(n);
  const solutions = queens.map(() => (
    [...Array(n)].map(() => [...Array(n)].fill(DOT))
  ));
  queens.forEach((queen, k) => {
    queen.forEach(([i, j]) => {
      solutions[k][i][j] = QUEEN;
    });
  });
  return solutions.map(solution => (
    solution.map(row => (
      row.join('')
    ))
  ));
};

export default solveNQueens;

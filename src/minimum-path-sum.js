/**
 * @param {number[][]} grid
 * @return {number}
 */
/*
  f(i, j) = min(
    grid[i][j] + f(i - 1, j)
    grid[i][j] + f(i, j - 1)
  );
*/
const minPathSum = (grid) => {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  const m = grid.length;
  const n = grid[0].length;
  const f = [...Array(m)].map(() => [...Array(n)]);
  f[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    f[i][0] = grid[i][0] + f[i - 1][0];
  }
  for (let j = 1; j < n; j++) {
    f[0][j] = grid[0][j] + f[0][j - 1];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      const min = Math.min(
        grid[i][j] + f[i - 1][j],
        grid[i][j] + f[i][j - 1]
      );
      f[i][j] = min;
    }
  }
  return f[m - 1][n - 1];
};

console.log(minPathSum([
  [2, 3, 1],
  [1, 3, 2],
]));
console.log(minPathSum([
  [1],
]));
console.log(minPathSum([
  [],
]));
console.log(minPathSum([]));
console.log(minPathSum([
  [1, 2],
  [1, 1],
]));

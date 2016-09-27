/* eslint-disable no-param-reassign */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const deltas = [[-1, 0], [0, -1], [1, 0], [0, 1]];

const dfs = (board, word, startI, startJ, path, pathSet) => {
  if (path.length >= word.length) {
    return true;
  }
  for (let k = 0; k < deltas.length; k++) {
    const [di, dj] = deltas[k];
    const i = startI + di;
    const j = startJ + dj;
    if (board[i] && board[i][j] === word[path.length] && !pathSet[i][j]) {
      const character = board[i][j];
      path.push(character);
      pathSet[i][j] = true;
      if (dfs(board, word, i, j, path, pathSet)) {
        return true;
      }
      pathSet[i][j] = false;
      path.pop();
    }
  }
  return false;
};

const exist = (board, word) => {
  if (!board.length || !board[0].length) {
    return false;
  }
  const m = board.length;
  const n = board[0].length;
  const pathSet = [...Array(m)].map(() => [...Array(n)]);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const character = board[i][j];
      if (character === word[0]) {
        pathSet[i][j] = true;
        if (dfs(board, word, i, j, [character], pathSet)) {
          return true;
        }
        pathSet[i][j] = false;
      }
    }
  }
  return false;
};

console.log(exist([
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
], 'FCSE'));
console.log(exist([
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
], 'FCSEEDA'));
console.log(exist([
], 'FCSEEDA'));
console.log(exist([
  ['a', 'a', 'a'],
], 'aaa'));

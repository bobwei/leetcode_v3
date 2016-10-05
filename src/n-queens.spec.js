/* eslint-disable max-len */
import solveNQueens from './n-queens';

describe('test solveNQueens', () => {
  it('can solveNQueens', () => {
    expect(solveNQueens(4)).toEqual(JSON.parse('[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]'));
  });
});

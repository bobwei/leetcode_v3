import totalNQueens from './n-queens-ii';

describe('test totalNQueens', () => {
  it('can get totalNQueens', () => {
    expect(totalNQueens(8)).toBe(92);
    expect(totalNQueens(1)).toBe(1);
    expect(totalNQueens(0)).toBe(1);
  });
});

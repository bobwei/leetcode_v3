import lengthOfLIS from './longest-increasing-subsequence';

describe('test lengthOfLIS', () => {
  it('can get lengthOfLIS', () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
    expect(lengthOfLIS([10])).toBe(1);
    expect(lengthOfLIS([])).toBe(0);
    expect(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6])).toBe(6);
  });
});

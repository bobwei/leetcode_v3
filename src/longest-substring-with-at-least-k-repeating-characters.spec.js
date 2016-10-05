import longestSubstring from './longest-substring-with-at-least-k-repeating-characters';

describe('test longestSubstring', () => {
  it('can get longestSubstring', () => {
    expect(longestSubstring('aaaaa', 2)).toBe(5);
    expect(longestSubstring('ababbc', 2)).toBe(5);
    expect(longestSubstring('aaabb', 3)).toBe(3);
    expect(longestSubstring('aaaxcbxaa', 3)).toBe(3);
  });
});

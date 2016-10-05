import longestPalindrome from './longest-palindrome';

describe('test longestPalindrome', () => {
  it('can get longestPalindrome', () => {
    expect(longestPalindrome('abccccdd')).toBe(7);
    expect(longestPalindrome('')).toBe(0);
    expect(longestPalindrome('bb')).toBe(2);
    expect(longestPalindrome('bbbbba')).toBe(5);
    expect(longestPalindrome('bbbbbaa')).toBe(7);
  });
});

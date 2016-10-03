import groupAnagrams from './anagrams';

describe('test Group Anagrams', () => {
  it('should be able to group anagrams', () => {
    expect(groupAnagrams(JSON.parse('["eat", "tea", "tan", "ate", "nat", "bat"]')))
      .toEqual(JSON.parse(`
        [
          ["eat", "tea", "ate"],
          ["tan", "nat"],
          ["bat"]
        ]
      `));
    expect(groupAnagrams([])).toEqual([]);
  });
});

import numTrees from './unique-binary-search-trees';

describe('test numTrees', () => {
  it('can get numTrees', () => {
    expect(numTrees(3)).toBe(5);
    expect(numTrees(4)).toBe(14);
  });
});

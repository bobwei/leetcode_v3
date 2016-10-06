import generateTrees from './unique-binary-search-trees-ii';
import BST from './data-structures/BST';

describe('test generateTrees', () => {
  let roots;
  it('can generateTrees', () => {
    roots = generateTrees(3);
    expect(roots.length).toBe(5);
    for (const root of roots) {
      const bst = new BST(root);
      expect(bst.keys()).toEqual([1, 2, 3]);
    }
    roots = generateTrees(4);
    expect(roots.length).toBe(14);
    for (const root of roots) {
      const bst = new BST(root);
      expect(bst.keys()).toEqual([1, 2, 3, 4]);
    }
    expect(generateTrees(0).length).toBe(0);
  });
});

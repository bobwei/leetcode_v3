import BST from './data-structures/BST';
import BSTIterator from './binary-search-tree-iterator';

describe('test BSTIterator', () => {
  let data;
  let result;
  let bst;
  let iterator;
  it('can get BSTIterator', () => {
    data = [4, 2, 1, 3, 6, 5, 7];
    result = [...data].sort();
    bst = (new BST())
      .add(...data);
    iterator = new BSTIterator(bst.root);
    while (iterator.hasNext()) {
      expect(iterator.next()).toBe(result.shift());
    }
  });
});

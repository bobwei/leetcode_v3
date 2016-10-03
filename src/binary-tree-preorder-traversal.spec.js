import BT from './data-structures/BT';
import preorderTraversal from './binary-tree-preorder-traversal';

describe('test pre order traversal', () => {
  let bt;
  it('should be able to do pre order traversal', () => {
    bt = BT.from([...Array(7)].map((obj, i) => i));
    expect(preorderTraversal(bt.root)).toEqual([0, 1, 3, 4, 2, 5, 6]);
    bt = BT.from([]);
    expect(preorderTraversal(bt.root)).toEqual([]);
    bt = BT.from([1, null, 2, null, null, 3]);
    expect(preorderTraversal(bt.root)).toEqual([1, 2, 3]);
  });
});

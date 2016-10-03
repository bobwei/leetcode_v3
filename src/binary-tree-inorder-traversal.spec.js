import BT from './data-structures/BT';
import inorderTraversal from './binary-tree-inorder-traversal';

describe('test post order traversal', () => {
  let bt;
  it('should be able to do in order traversal', () => {
    bt = BT.from([...Array(7)].map((obj, i) => i));
    expect(inorderTraversal(bt.root)).toEqual([3, 1, 4, 0, 5, 2, 6]);
    bt = BT.from([1, null, 2, null, null, 3]);
    expect(inorderTraversal(bt.root)).toEqual([1, 3, 2]);
  });
});

import BT from './data-structures/BT';
import postorderTraversal from './binary-tree-postorder-traversal';

describe('test post order traversal', () => {
  let bt;
  it('should be able to do post order traversal', () => {
    bt = BT.from([...Array(7)].map((obj, i) => i));
    expect(postorderTraversal(bt.root)).toEqual([3, 4, 1, 5, 6, 2, 0]);
    bt = BT.from([]);
    expect(postorderTraversal(bt.root)).toEqual([]);
    bt = BT.from([1, null, 2, null, null, 3]);
    expect(postorderTraversal(bt.root)).toEqual([3, 2, 1]);
  });
});

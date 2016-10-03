import BT from './index';

describe('test Binary Tree', () => {
  let bt;
  it('can be constructed from an array', () => {
    bt = BT.from([0, 1, 2, 3, 4, 5, 6]);
    expect(bt.root.val).toEqual(0);
    bt = BT.from([]);
    expect(bt.root).toEqual(null);
    bt = BT.from([null]);
    expect(bt.root).toEqual(null);
  });
  it('can do inOrder traversal', () => {
    bt = BT.from([0, 1, 2, 3, 4, 5, 6]);
    expect(bt.inOrder()).toEqual([3, 1, 4, 0, 5, 2, 6]);
    bt = BT.from([0]);
    expect(bt.inOrder()).toEqual([0]);
    bt = BT.from([0, null, 1]);
    expect(bt.inOrder()).toEqual([0, 1]);
    bt = BT.from([0, null, 1, null, null, 2, 3]);
    expect(bt.inOrder()).toEqual([0, 2, 1, 3]);
  });
});

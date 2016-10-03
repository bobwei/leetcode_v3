import BT from './data-structures/BT';
import rightSideView from './binary-tree-right-side-view';

describe('test right side view', () => {
  let bt;
  it('should be able to show right side view', () => {
    bt = BT.from([1, 2, 3, null, 5, null, 4]);
    expect(rightSideView(bt.root)).toEqual([1, 3, 4]);
    bt = BT.from([]);
    expect(rightSideView(bt.root)).toEqual([]);
    bt = BT.from([1, 2, 3, 4]);
    expect(rightSideView(bt.root)).toEqual([1, 3, 4]);
    bt = BT.from([1, 2]);
    expect(rightSideView(bt.root)).toEqual([1, 2]);
  });
});

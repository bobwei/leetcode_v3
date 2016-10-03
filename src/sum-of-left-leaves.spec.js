import BT from './data-structures/BT';
import sumOfLeftLeaves from './sum-of-left-leaves';

describe('test sumOfLeftLeaves', () => {
  let bt;
  it('should be able to sum left leaves (test 1)', () => {
    bt = BT.from([3, 9, 20, null, null, 15, 6]);
    expect(sumOfLeftLeaves(bt.root)).toBe(24);
  });
  it('should be able to sum left leaves (test 2)', () => {
    bt = BT.from([]);
    expect(sumOfLeftLeaves(bt.root)).toBe(0);
  });
});

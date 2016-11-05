/* eslint-disable prefer-const */
import hasPathSum from './path-sum';
import BT from './data-structures/BT/index';

it('can get hasPathSum', () => {
  let bt;
  bt = BT.from([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, null, 1]);
  expect(hasPathSum(bt.root, 22)).toBe(true);
  bt = BT.from([23, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, null, 1]);
  expect(hasPathSum(bt.root, 22)).toBe(false);
  bt = BT.from([-2, null, -3]);
  expect(hasPathSum(bt.root, -5)).toBe(true);
});

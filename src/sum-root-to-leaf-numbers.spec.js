/* eslint-disable prefer-const, no-unused-vars */
import BT from './data-structures/BT';
import sumNumbers from './sum-root-to-leaf-numbers';

it('can get sumNumbers', () => {
  let bt;
  bt = BT.from([1, 2, 3]);
  expect(sumNumbers(bt.root)).toBe(25);
  bt = BT.from([1, 2, 3, 4, 5, 6, 7]);
  expect(sumNumbers(bt.root)).toBe(522);
  bt = BT.from([]);
  expect(sumNumbers(bt.root)).toBe(0);
});

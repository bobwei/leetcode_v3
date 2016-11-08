import kthSmallest from './kth-smallest-element-in-a-bst';
import BST from './data-structures/BST';

it('kthSmallest', () => {
  expect(
    kthSmallest((new BST()).add(4, 2, 6, 1, 3, 5, 7, 3).root, 3)
  ).toBe(3);
  expect(
    kthSmallest((new BST()).add(4, 2, 6, 1, 3, 5, 7, 3).root, 4)
  ).toBe(4);
  expect(
    kthSmallest((new BST()).add(4).root, 1)
  ).toBe(4);
});

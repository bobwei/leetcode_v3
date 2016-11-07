import findMin from './find-minimum-in-rotated-sorted-array';

it('can findMin', () => {
  expect(findMin([2, 4, 5, 6, 7, 0, 1])).toBe(0);
  expect(findMin([1, 2, 4, 5, 6, 7, 0])).toBe(0);
  expect(findMin([0, 1, 2, 4, 5, 6, 7])).toBe(0);
  expect(findMin([7, 0, 1, 2, 4, 5, 6])).toBe(0);
  expect(findMin([6, 7, 0, 1, 2, 4, 5])).toBe(0);
});

import BST from './index';

describe('test Binary Search Tree', () => {
  let bst;
  let values;
  it('can add value and values to BST', () => {
    bst = (new BST())
      .add(1)
      .add(2, 3);
    expect(bst.root.val).toBe(1);
  });
  it('can do bfs', () => {
    bst = (new BST())
      .add(3, 5, 4);
    expect(bst.bfs()).toEqual([3, 5, 4]);
    bst = (new BST())
      .add(2)
      .add(1, 3, 5, 4, 2);
    expect(bst.bfs()).toEqual([2, 1, 3, 5, 4]);
  });
  it('can check if it contains a certain value', () => {
    values = [1, 2, 3, 3, 4, 9];
    bst = (new BST())
      .add(...values);
    values.forEach((val) => {
      expect(bst.contains(val)).toBe(true);
    });
    expect(bst.contains(19)).toBe(false);
  });
});

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
    bst = (new BST())
      .add(4, 2, 1, 3, 6, 5, 7);
    expect(bst.bfs()).toEqual([4, 2, 6, 1, 3, 5, 7]);
    bst = (new BST());
    expect(bst.bfs()).toEqual([]);
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
  it('can find min and find max', () => {
    bst = (new BST())
      .add(1, 5, 3, 4, 7);
    expect(bst.findMin()).toBe(1);
    bst = (new BST())
      .add(0, 1);
    expect(bst.findMin()).toBe(0);
    bst = (new BST())
      .add(1, 5, 3, 4, 7);
    expect(bst.findMax()).toBe(7);
    bst = (new BST())
      .add(0, 1);
    expect(bst.findMax()).toBe(1);
  });
  it('can delete value and values from BST', () => {
    bst = (new BST())
      .add(4, 2, 1, 3, 6, 5, 7);
    expect(bst.bfs()).toEqual([4, 2, 6, 1, 3, 5, 7]);
    bst
      .delete(4, 1);
    expect(bst.bfs()).toEqual([3, 2, 6, 5, 7]);
    bst
      .delete(4);
    expect(bst.bfs()).toEqual([3, 2, 6, 5, 7]);
    bst
      .delete(6);
    expect(bst.bfs()).toEqual([3, 2, 5, 7]);
    bst
      .delete(3, 2, 5, 7);
    expect(bst.bfs()).toEqual([]);
    bst
      .delete(3);
    expect(bst.bfs()).toEqual([]);
  });
  it('can calculate tree height', () => {
    bst = (new BST())
      .add(4, 2, 1, 3);
    expect(bst.getHeight()).toBe(2);
    bst = (new BST())
      .add(4, 2, 1, 3, 100, 101, 102);
    expect(bst.getHeight()).toBe(3);
    bst
      .delete(100, 4);
    expect(bst.getHeight()).toBe(2);
    bst
      .delete(2, 1, 3, 102);
    expect(bst.getHeight()).toBe(0);
    bst
      .delete(101);
    expect(bst.getHeight()).toBe(-1);
  });
  it('can get keys', () => {
    bst = (new BST())
      .add(4, 2, 1, 3, 6, 5, 7);
    expect(bst.keys()).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});

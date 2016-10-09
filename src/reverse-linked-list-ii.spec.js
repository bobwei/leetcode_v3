import reverseBetween from './reverse-linked-list-ii';
import LinkedList from './data-structures/LinkedList';

describe('test reverseBetween', () => {
  let linkedList;
  it('can reverseBetween testcase1', () => {
    linkedList = LinkedList.from([1, 2, 3, 4, 5]);
    expect(reverseBetween(linkedList.head, 2, 4).values()).toEqual([1, 4, 3, 2, 5]);
  });
  it('can reverseBetween testcase2', () => {
    linkedList = LinkedList.from([3, 5]);
    expect(reverseBetween(linkedList.head, 1, 2).values()).toEqual([5, 3]);
  });
  it('can reverseBetween testcase3', () => {
    linkedList = LinkedList.from([5]);
    expect(reverseBetween(linkedList.head, 1, 1).values()).toEqual([5]);
  });
});

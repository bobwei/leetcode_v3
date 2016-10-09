import LinkedList from './index';

describe('test LinkedList', () => {
  let linkedList;
  it('can insert values and get values', () => {
    linkedList = LinkedList.from([1, 2, 3, 4, 5]);
    expect(linkedList.values()).toEqual([1, 2, 3, 4, 5]);
  });
});

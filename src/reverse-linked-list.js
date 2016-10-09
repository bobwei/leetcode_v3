/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  let parent = null;
  let current = head;
  while (current) {
    const tmp = current.next;
    current.next = parent;
    parent = current;
    current = tmp;
  }
  return parent;
};

export default reverseList;

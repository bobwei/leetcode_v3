/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = (head, m, n) => {
  if (m === n) {
    return head;
  }
  let parent = null;
  let current = head;
  let rtail;
  let rhead;
  let otail;
  for (let i = 1; i <= n; i++) {
    if (i < m) {
      parent = current;
      current = current.next;
    } else if (i === m) {
      rtail = current;
      otail = parent;
      parent = current;
      current = current.next;
    } else if (i > m && i < n) {
      const next = current.next;
      current.next = parent;
      parent = current;
      current = next;
    } else if (i > m && i == n) {
      const next = current.next;
      current.next = parent;
      if (otail) {
        otail.next = current;
      }
      rtail.next = next;
    }
  }
  if (m <= 1) {
    head = current;
  }
  return head;
};

export default reverseBetween;

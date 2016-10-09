export class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  add(val) {
    let current = this;
    while (current.next) {
      current = current.next;
    }
    current.next = new ListNode(val);
    return this;
  }

  values() {
    let current = this;
    const output = [];
    while (current) {
      output.push(current.val);
      current = current.next;
    }
    return output;
  }
}

export default class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  static from(arr) {
    const linkedList = new LinkedList();
    for (const val of arr) {
      if (!linkedList.head) {
        linkedList.head = new ListNode(val);
      } else {
        linkedList.head.add(val);
      }
    }
    return linkedList;
  }

  values() {
    return this.head.values();
  }
}

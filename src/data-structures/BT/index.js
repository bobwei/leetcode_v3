export class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }

  static from(arr, i) {
    if (i >= arr.length || arr[i] === null) {
      return null;
    }
    const root = new TreeNode(arr[i]);
    root.left = TreeNode.from(arr, 2 * i + 1);
    root.right = TreeNode.from(arr, 2 * i + 2);
    return root;
  }

  inOrder(output = []) {
    if (this.left) {
      this.left.inOrder(output);
    }
    output.push(this.val);
    if (this.right) {
      this.right.inOrder(output);
    }
    return output;
  }
}

export default class BT {
  constructor(root = null) {
    this.root = root;
  }

  inOrder() {
    return this.root.inOrder();
  }

  static from(arr) {
    return new BT(TreeNode.from(arr, 0));
  }
}

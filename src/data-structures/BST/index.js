export class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }

  add(val) {
    if (val < this.val) {
      if (!this.left) {
        this.left = new TreeNode(val);
      } else {
        this.left.add(val);
      }
    } else if (val > this.val) {
      if (!this.right) {
        this.right = new TreeNode(val);
      } else {
        this.right.add(val);
      }
    }
    return this;
  }

  findMin() {
    if (!this.left) {
      return this.val;
    }
    return this.left.findMin();
  }

  findMax() {
    if (!this.right) {
      return this.val;
    }
    return this.right.findMax();
  }

  contains(val) {
    if (val === this.val) {
      return true;
    }
    if (val < this.val && this.left) {
      return this.left.contains(val);
    } else if (val > this.val && this.right) {
      return this.right.contains(val);
    }
    return false;
  }
}

export default class BST {
  constructor() {
    this.root = null;
  }

  add(...args) {
    while (args.length) {
      const val = args.shift();
      if (!this.root) {
        this.root = new TreeNode(val);
      } else {
        this.root.add(val);
      }
    }
    return this;
  }

  findMin() {
    return this.root.findMin();
  }

  findMax() {
    return this.root.findMax();
  }

  contains(val) {
    return this.root.contains(val);
  }

  bfs() {
    const output = [];
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      output.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return output;
  }
}

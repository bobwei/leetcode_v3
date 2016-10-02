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

  delete(val) {
    if (val < this.val) {
      if (this.left) {
        this.left = this.left.delete(val);
      }
    } else if (val > this.val) {
      if (this.right) {
        this.right = this.right.delete(val);
      }
    } else {
      if (!this.left) {
        return this.right;
      } else if (!this.right) {
        return this.left;
      } else {
        const leftMax = this.left.findMax();
        this.val = leftMax;
        this.left = this.left.delete(leftMax);
      }
    }
    return this;
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

  getHeight() {
    let height = -1;
    if (this.left) {
      height = Math.max(height, this.left.getHeight());
    }
    if (this.right) {
      height = Math.max(height, this.right.getHeight());
    }
    return height + 1;
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

  delete(...args) {
    if (!this.root) {
      return this;
    }
    while (args.length) {
      const val = args.shift();
      this.root = this.root.delete(val);
    }
    return this;
  }

  contains(val) {
    return this.root.contains(val);
  }

  getHeight() {
    if (!this.root) {
      return -1;
    }
    return this.root.getHeight();
  }

  bfs() {
    const output = [];
    if (!this.root) {
      return output;
    }
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

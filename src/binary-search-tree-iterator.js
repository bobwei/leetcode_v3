/* eslint-disable no-param-reassign */
/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const BSTIterator = class {
  constructor(root) {
    this.root = root;
  }

  hasNext() {
    return !!this.root;
  }

  next() {
    const min = this.findMin(this.root);
    this.root = this.deleteMin(this.root, min);
    return min;
  }

  findMin(root) {
    if (!root) {
      return null;
    }
    if (root.left) {
      return this.findMin(root.left);
    }
    return root.val;
  }

  deleteMin(root, val) {
    if (!root) {
      return null;
    }
    if (val < root.val) {
      root.left = this.deleteMin(root.left, val);
      return root;
    } else if (val > root.val) {
      root.right = this.deleteMin(root.right, val);
      return root;
    }
    if (!root.left && !root.right) {
      return null;
    }
    /*
      Since we are deleting min of the bst, there must be no left nodes.
      So we can return right node as root immediately.
    */
    return root.right;
  }
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

export default BSTIterator;

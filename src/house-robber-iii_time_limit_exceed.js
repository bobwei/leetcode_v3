/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const rob = (root) => {
  if (!root) {
    return 0;
  }
  /*
    root + grand children
  */
  let r1 = root.val;
  if (root.left) {
    if (root.left.left) {
      r1 += rob(root.left.left);
    }
    if (root.left.right) {
      r1 += rob(root.left.right);
    }
  }
  if (root.right) {
    if (root.right.left) {
      r1 += rob(root.right.left);
    }
    if (root.right.right) {
      r1 += rob(root.right.right);
    }
  }
  /*
    children
  */
  const r2 = rob(root.left) + rob(root.right);
  /*
    choose maximum
  */
  return Math.max(r1, r2);
};

import { TreeNode } from 'the-tree-node';

console.log(rob(TreeNode.fromBFS([3, 2, 3, null, 3, null, 1])));
console.log(rob(TreeNode.fromBFS([3, 4, 5, 1, 3, null, 1])));
console.log(rob(TreeNode.fromBFS([3, null, 10])));
console.log(rob(TreeNode.fromBFS([4, 1, null, 2, null, 3])));

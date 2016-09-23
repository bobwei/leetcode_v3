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
/*
  return [maximum with root, maximum without root]
*/
const recusiveRob = (root) => {
  if (!root) {
    return [0, 0];
  }
  const [leftMaximumWithRoot, leftMaximumWithoutRoot] = recusiveRob(root.left);
  const [rightMaximumWithRoot, rightMaximumWithoutRoot] = recusiveRob(root.right);
  return [
    root.val + leftMaximumWithoutRoot + rightMaximumWithoutRoot,
    Math.max(leftMaximumWithRoot, leftMaximumWithoutRoot) +
    Math.max(rightMaximumWithRoot, rightMaximumWithoutRoot),
  ];
};

const rob = (root) => {
  if (!root) {
    return 0;
  }
  return Math.max(...recusiveRob(root));
};

import { TreeNode } from 'the-tree-node';

console.log(rob(TreeNode.fromBFS([3, 2, 3, null, 3, null, 1])));
console.log(rob(TreeNode.fromBFS([3, 4, 5, 1, 3, null, 1])));
console.log(rob(TreeNode.fromBFS([3, null, 10])));
console.log(rob(TreeNode.fromBFS([4, 1, null, 2, null, 3])));

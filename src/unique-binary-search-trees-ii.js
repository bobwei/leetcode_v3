/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
import { TreeNode } from './data-structures/BST';

const helper = (start, end) => {
  if (end <= start) {
    return [null];
  }
  const trees = [];
  for (let i = start; i < end; i++) {
    const leftSubtrees = helper(start, i);
    const rightSubtrees = helper(i + 1, end);
    for (const leftRoot of leftSubtrees) {
      for (const rightRoot of rightSubtrees) {
        const root = new TreeNode(i + 1);
        root.left = leftRoot;
        root.right = rightRoot;
        trees.push(root);
      }
    }
  }
  return trees;
};

const generateTrees = (n) => {
  if (!n) {
    return [];
  }
  return helper(0, n);
};

export default generateTrees;

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
const LEFT = 0;
const RIGHT = 1;

const sumOfLeftLeaves = (root, iam = null) => {
  if (!root) {
    return 0;
  }
  /* none leave nodes */
  if (root.left || root.right) {
    return sumOfLeftLeaves(root.left, LEFT) + sumOfLeftLeaves(root.right, RIGHT);
  }
  /* leave nodes */
  if (iam === LEFT) {
    return root.val;
  } else if (iam === RIGHT) {
    return 0;
  }
  return 0;
};

export default sumOfLeftLeaves;

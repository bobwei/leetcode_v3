/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = (root, sum) => {
  if (!root) {
    return false;
  }
  const ans = sum - root.val;
  if (ans === 0 && !root.left && !root.right) {
    return true;
  }
  return hasPathSum(root.left, ans) || hasPathSum(root.right, ans);
};

export default hasPathSum;

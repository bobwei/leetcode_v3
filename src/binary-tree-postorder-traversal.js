/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = function(root) {
  if (!root) {
    return [];
  }
  const output = [];
  const stack = [root];
  while (stack.length) {
    const ptr = stack[stack.length - 1];
    if (ptr.left) {
      stack.push(ptr.left);
      ptr.left = null;
    } else if (ptr.right) {
      stack.push(ptr.right);
      ptr.right = null;
    } else {
      output.push(ptr.val);
      stack.pop();
    }
  }
  return output;
};

export default postorderTraversal;

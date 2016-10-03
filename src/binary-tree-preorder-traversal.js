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
const preorderTraversal = (root) => {
  if (!root) {
    return [];
  }
  const output = [];
  let ptr = root;
  const stack = [];
  while (stack.length || ptr) {
    if (ptr) {
      output.push(ptr.val);
      if (ptr.right) {
        stack.push(ptr.right);
      }
      ptr = ptr.left;
    } else {
      ptr = stack.pop();
    }
  }
  return output;
};

export default preorderTraversal;

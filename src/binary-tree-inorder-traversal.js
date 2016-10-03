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
const inorderTraversal = (root) => {
  const output = [];
  const stack = [];
  let ptr = root;
  while (stack.length || ptr) {
    if (ptr) {
      stack.push(ptr);
      ptr = ptr.left;
    } else {
      const node = stack.pop();
      output.push(node.val);
      if (node.right) {
        ptr = node.right;
      }
    }
  }
  return output;
};

export default inorderTraversal;

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
  let ptr = root;
  const stack = [];
  let i = 0;
  while (ptr || stack.length) {
    if (ptr) {
      stack.push(ptr);
      ptr = ptr.left;
    } else {
      const node = stack.pop();
      i += 1;
      if (i >= k) {
        return node.val;
      }
      if (node.right) {
        ptr = node.right;
      }
    }
  }
  return null;
};

export default kthSmallest;

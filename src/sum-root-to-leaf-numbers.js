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
const helper = (root, path = !!root && [root.val] || [], output = []) => {
  if (!root) {
    return output;
  }
  /*
  if current root is a leaf => push path to output
  */
  if (!root.left && !root.right) {
    output.push([...path]);
  } else {
    if (root.left) {
      path.push(root.left.val);
      helper(root.left, path, output);
      path.pop();
    }
    if (root.right) {
      path.push(root.right.val);
      helper(root.right, path, output);
      path.pop();
    }
  }
  return output;
};

const sumNumbers = (root) => {
  const paths = helper(root);
  return paths
    .map(path => parseInt(path.join(''), 10))
    .reduce((s, v) => s + v, 0);
};

export default sumNumbers;

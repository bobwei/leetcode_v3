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
const rightSideView = (root) => {
  if (!root) {
    return [];
  }
  const output = [];
  const queue = [root];
  let nodesInTheLevel = queue.length;
  while (queue.length) {
    const lastNodeInTheLevel = queue[queue.length - 1];
    output.push(lastNodeInTheLevel.val);
    for (let i = 0; i < nodesInTheLevel; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    nodesInTheLevel = queue.length;
  }
  return output
};

export default rightSideView;

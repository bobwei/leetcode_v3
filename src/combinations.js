/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k, startIndex = 0, output = [], path = []) => {
  if (path.length === k) {
    output.push([...path]);
    return output;
  }
  for (let i = startIndex; i < n; i++) {
    path.push(i);
    combine(n, k, i + 1, output, path);
    path.pop();
  }
  return output;
};

console.log(combine(4, 2));

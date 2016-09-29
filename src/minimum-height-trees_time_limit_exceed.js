/* eslint-disable no-param-reassign, no-unused-expressions */
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const dfs = (graph, vertex, pathSet = {}) => {
  if (graph[vertex].every((v) => pathSet[v])) {
    return 0;
  }
  pathSet[vertex] = true;
  let depth = -Infinity;
  for (let i = 0; i < graph[vertex].length; i++) {
    const sibling = graph[vertex][i];
    if (!pathSet[sibling]) {
      depth = Math.max(depth, dfs(graph, sibling, pathSet));
    }
  }
  pathSet[vertex] = false;
  return depth + 1;
};

const findMinHeightTrees = (n, edges) => {
  const graph = [...Array(n)].map(() => []);
  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    graph[u].push(v);
    graph[v].push(u);
  }
  let minHeight = Infinity;
  const heights = [...Array(n)].map(() => 0);
  for (let i = 0; i < graph.length; i++) {
    heights[i] = dfs(graph, i);
    if (heights[i] < minHeight) {
      minHeight = heights[i];
    }
  }
  return heights
    .map((h, i) => ((h === minHeight) ? i : null))
    .filter(i => i !== null);
};

console.log(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]]));
console.log(findMinHeightTrees(6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]));
console.log(findMinHeightTrees(1, []));

/* eslint-disable max-len */
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = (n, edges) => {
  if (n === 1) {
    return [0];
  }
  /* build graph */
  const graph = {};
  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];
    graph[u].push(v);
    graph[v].push(u);
  }
  /* remove leaves in the graph until there are at most 2 vertices in the graph */
  while (Object.keys(graph).length > 2) {
    const leaves = Object.keys(graph).filter(v => graph[v].length === 1);
    for (let i = 0; i < leaves.length; i++) {
      const leave = leaves[i];
      const [w] = graph[leave];
      if (graph[w]) {
        graph[w].splice(graph[w].indexOf(parseInt(leave, 10)), 1);
      }
      delete graph[leave];
    }
  }
  return Object.keys(graph).map(i => parseInt(i, 10));
};

console.log(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]]));
console.log(findMinHeightTrees(6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]));
console.log(findMinHeightTrees(1, []));
console.log(findMinHeightTrees(11, [[0, 1], [0, 2], [2, 3], [0, 4], [2, 5], [5, 6], [3, 7], [6, 8], [8, 9], [9, 10]]));

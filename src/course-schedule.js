/* eslint-disable no-param-reassign */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
/*
  return true if contains cycle
*/
const hasCycle = (graph, vertex, visited, path) => {
  visited[vertex] = true;
  path.add(vertex);
  for (let i = 0; i < (!!graph[vertex] && graph[vertex].length || 0); i++) {
    const next = graph[vertex][i];
    if (!visited[next]) {
      if (hasCycle(graph, next, visited, path)) {
        return true;
      }
    } else {
      if (path.has(next)) {
        return true;
      }
    }
  }
  path.delete(vertex);
  return false;
};

const canFinish = (numCourses, prerequisites) => {
  /*
    build course dependency graph
  */
  const graph = prerequisites.reduce((g, pair) => {
    const [course, prerequisite] = pair;
    if (!g[course]) {
      g[course] = [];
    }
    g[course].push(String(prerequisite));
    return g;
  }, {});
  /*
    detect cycle in graph
  */
  const vertices = Object.keys(graph);
  const visited = {};
  const path = new Set();
  for (let i = 0; i < vertices.length; i++) {
    if (visited[vertices[i]]) {
      continue;
    }
    if (hasCycle(graph, vertices[i], visited, path)) {
      return false;
    }
  }
  return true;
};

console.log(false, canFinish(2, [[1, 0], [0, 1]]));
console.log(true, canFinish(2, [[1, 0], [1, 3], [3, 2]]));
console.log(true, canFinish(2, [[1, 0], [2, 0]]));
console.log(true, canFinish(2, [[0, 1], [0, 2], [1, 2]]));
console.log(false, canFinish(2, [[1, 2], [2, 3], [3, 1]]));
console.log(true, canFinish(2, [[1, 9]]));
console.log(true, canFinish(8, [[1, 0], [2, 6], [1, 7], [6, 4], [7, 0], [0, 5]]));
console.log(false, canFinish(2, [[0, 1], [1, 2], [0, 3], [3, 0]]));

/* eslint-disable no-param-reassign */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
  const graph = [...Array(numCourses)].map(() => []);
  const inDegree = [...Array(numCourses)].map(() => 0);
  /*
    build course dependency graph
  */
  prerequisites
    .forEach((pair) => {
      const [course, prerequisite] = pair;
      if (graph[prerequisite].indexOf(course) < 0) {
        graph[prerequisite].push(course);
        inDegree[course] += 1;
      }
    });
  /*
    find the path
  */
  const path = [];
  const queue = inDegree.map((count, i) => ((count <= 0) ? i : null)).filter(i => i !== null);
  while (queue.length) {
    const ptr = queue.shift();
    path.push(ptr);
    graph[ptr]
      .forEach((vertex) => {
        inDegree[vertex] -= 1;
        if (inDegree[vertex] === 0) {
          queue.push(vertex);
        }
      });
  }
  /*
    if no vertex in the queue, but there exists some vertices with inDegree > 0,
    there exists at lease one cycle
  */
  if (inDegree.some(v => v > 0)) {
    return [];
  }
  return path;
};

console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));
console.log(findOrder(1, []));
console.log(findOrder(0, []));
console.log(findOrder(10, []));
console.log(findOrder(7, []));
console.log(findOrder(2, [[0, 1], [1, 0]]));
console.log(findOrder(4, [[1, 0], [2, 0], [0, 3]]));
console.log(findOrder(3, [[1, 0]]));
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));
console.log(findOrder(4, [[0, 1], [3, 1], [1, 3], [3, 2]]));

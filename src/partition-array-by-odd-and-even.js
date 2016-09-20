/* eslint-disable no-param-reassign */
/**
 * @param {number[]} arr
 * @return {number[]}
 */

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const partition = (arr) => {
  let i = 0;
  const n = arr.length;
  for (let j = 0; j < n; j++) {
    if (arr[j] % 2 === 1) {
      swap(arr, i, j);
      i += 1;
    }
  }
  return arr;
};

console.log(partition([1, 2, 3, 4]));
console.log(partition([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(partition([2, 1, 3, 3, 4]));

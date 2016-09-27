/**
 * @param {number} num
 * @return {string[]}
 */
const zeroPadding = (s, n = 2) => {
  const arr = [...Array(n)].map(() => 0);
  const str = String(s);
  for (let i = 0; i < str.length; i++) {
    arr[n - (str.length - i)] = str[i];
  }
  return arr.join('');
};

const getTime = (data) => {
  const hrs = data.filter(i => i < 4).reduce((s, v) => s + Math.pow(2, v), 0);
  const mins = data.filter(i => i >= 4).reduce((s, v) => s + Math.pow(2, v - 4), 0);
  if (hrs <= 11 && mins <= 59) {
    return `${hrs}:${zeroPadding(mins)}`;
  }
  return null;
};

const getCombinations = (num, output = [], path = [], startIndex = 0) => {
  if (path.length >= num) {
    output.push([...path]);
    return output;
  }
  for (let i = startIndex; i < 10; i++) {
    path.push(i);
    getCombinations(num, output, path, i + 1);
    path.pop();
  }
  return output;
};

const readBinaryWatch = (num) => {
  const combinations = getCombinations(num);
  return combinations.map(getTime).filter(time => time);
};

console.log(readBinaryWatch(2));
console.log(readBinaryWatch(0));
